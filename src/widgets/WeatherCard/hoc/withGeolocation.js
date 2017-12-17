import React from 'react';

/**
 * if a provider is not specified, try to use the browser geolocation provider
 */
const defaultProvider =
  window && window.navigator && 'geolocation' in window.navigator
    ? window.navigator.geolocation
    : null;

/**
 * Higher order component that fetches the user location and passes it down
 * as props.
 * Other than the props specified in mapPositionToProps, the hoc will pass down a
 * geolocation object containing its state
 * @param {Function} mapPositionToProps A function to transform the position in props to pass to the wrapped component
 * @param {Object|Function} options The option object or a function that returns one
 * @param {Object} options.geolocationProvider an object implementing the same methods as navigator.geolocation
 * @param {Object} options.providerOptions options that will be used when fetching the position
 */

const withGeolocation = (
  mapPositionToProps = values => ({}),
  { geolocationProvider = defaultProvider, providerOptions } = {}
) => WrappedComponent => {
  return class Geolocated extends React.PureComponent {
    static displayName = `geolocated(${WrappedComponent.displayName ||
      WrappedComponent.name ||
      'Component'})`;

    constructor(props) {
      super(props);
      this.state = {
        position: null, // the user position
        fetching: false, // true if fetching the initial position
        error: null, // if not null it will contain a PositionError
        notSupported: false // true if the device doesn't support geolocation
      };
    }

    setFetching = fetching => {
      this.setState({ fetching });
    };

    handleLocationChange = position => {
      this.setState({
        position: position.coords ? position.coords : null,
        fetching: false,
        error: null
      });
    };

    handleLocationError = error => {
      this.setState({
        error,
        fetching: false,
        position: null
      });
    };

    subscribeToLocationChange() {
      this.setFetching(true);
      this.watchId = geolocationProvider.watchPosition(
        this.handleLocationChange,
        this.handleLocationError,
        providerOptions
      );
    }

    componentDidMount() {
      if (geolocationProvider) {
        this.subscribeToLocationChange();
      } else {
        this.setState({
          notSupported: true
        });
      }
    }

    componentWillUnmount() {
      if (geolocationProvider) geolocationProvider.clearWatch(this.watchId);
    }

    render() {
      let geolocation = {
        ...this.state
      };

      let positionProps = mapPositionToProps(this.state.position || {});

      return (
        <WrappedComponent
          {...this.props}
          geolocation={geolocation}
          {...positionProps}
        />
      );
    }
  };
};

export default withGeolocation;
