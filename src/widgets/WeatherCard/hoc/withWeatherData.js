import React, { PureComponent } from 'react';
import { isFunction, isNil } from '../utils/generic';
import { yahooWeatherProvider as defaultProvider } from '../utils/weatherProvider';

/**
 * Higher order component that fetches the weather for a certain location
 * and passes it down as props.
 * Other than the props specified in mapPositionToProps, the hoc will pass down a
 * weather object containing its state and a method to fetch the data
 *
 * @param {Function} mapWeatherToProps A function to transform the weather data in props to pass to the wrapped component
 * @param {Object|Function} options The option object or a function that returns one
 * @param {Number} options.latitude the latitude of the location
 * @param {Number} options.longitude the latitude of the location
 * @param {Function} options.weatherProvider a function that takes latitude and longitude and asynchronously returns
 *                                           the weather. if not specified uses the defaultProvider.
 */
const withWeatherData = (
  mapWeatherToProps = weather => ({}),
  options
) => WrappedComponent => {
  /**
   * Options getter.
   * if options is an object return the object, if it's a function
   * pass props to it to allow for dynamic configuration.
   */
  const getOptions = props => {
    let currentOptions = isFunction(options) ? options(props) : options;
    return {
      weatherProvider: defaultProvider,
      ...currentOptions
    };
  };

  return class WithWeather extends PureComponent {
    static displayName = `withWeather(${WrappedComponent.displayName ||
      WrappedComponent.name ||
      'Component'})`;
    constructor(props) {
      super(props);
      this.state = {
        fetching: false,
        error: null,
        data: null
      };
    }

    setFetching = fetching => {
      this.setState({ fetching });
    };

    setError = error => {
      this.setState({ error, fetching: false });
    };

    setData = data => {
      this.setState({ data, fetching: false });
    };

    update() {
      let { latitude, longitude } = getOptions(this.props);
      if (isNil(latitude) || isNil(longitude)) {
        this.setFetching(true);
        this.fetchData().then(this.setData, this.setError);
      }
    }

    fetchData() {
      let { latitude, longitude, weatherProvider } = getOptions(this.props);
      return weatherProvider(latitude, longitude);
    }

    componentDidMount() {
      this.update();
    }

    componentDidUpdate(prevProps) {
      let { latitude, longitude } = getOptions(this.props);
      let { latitude: prevLat, longitude: prevLong } = getOptions(prevProps);
      if (latitude !== prevLat || longitude !== prevLong) {
        this.update();
      }
    }

    render() {
      let { data } = this.state;
      let weatherProps = data ? mapWeatherToProps(data) : {};
      let weather = {
        ...this.state,
        fetch: this.fetchData
      };
      return (
        <WrappedComponent
          {...this.props}
          {...weatherProps}
          weatherData={weather}
        />
      );
    }
  };
};

export default withWeatherData;
