/**
 * A WeatherCard component connected to a weather provider with the
 * 'withWeatherData' HOC.
 * When passed latitude and longitude as props, it will automatically
 * fetch the weather for that location and update the map.
 */

import WeatherCard from './WeatherCardComponent';
import withWeatherData from './hoc/withWeatherData';

const fahrenheitToCelsius = f => (f - 32) / 1.8;

const extractWeatherData = ({
  item: { condition: { temp, code, text } },
  atmosphere: { humidity },
  wind: { speed }
}) => ({
  temperature: fahrenheitToCelsius(parseFloat(temp)),
  // I have no data for perceived temperature, for the moment return the normal temperature
  perceived: fahrenheitToCelsius(parseFloat(temp)),
  wind: parseFloat(speed),
  humidity: parseFloat(humidity),
  iconCode: 'yahoo-' + code,
  description: text
});

const WeatherCardConnected = withWeatherData(
  // mapWeatherToProps
  data => ({
    weather: extractWeatherData(data),
    place: data.location.city
  }),
  // withWeatherData options, select latitude and longitude from props
  props => ({
    latitude: props.latitude,
    longitude: props.longitude
  })
)(WeatherCard);

export default WeatherCardConnected;
