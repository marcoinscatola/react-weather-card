/**
 * A bare WeatherCard component with no data source
 */

import Front from './Front';
import Back from './Back';
import flippable from './hoc/flippable';

const WeatherCard = flippable(props => ({
  width: 255,
  height: 365
}))(Front, Back);

export default WeatherCard;
