/**
 * A standalone WeatherCard widget.
 * It will fetch the user location using the withGeolocation HOC, and pass
 * the latitude and the longitude to a WeatherCardConnected component, that
 * will in turn fetch and render the weather data and the map
 */

import WeatherCardConnected from './WeatherCardConnected';
import withGeolocation from './hoc/withGeolocation';

const WeatherCardStandalone = withGeolocation(
  // mapPositionToProps
  position => ({
    latitude: position.latitude,
    longitude: position.longitude
  })
)(WeatherCardConnected);

export default WeatherCardStandalone;
