import { isNil, simpleFetch } from './generic';

/**
 * Retrieves weather data from yahoo weather api.
 * @param {Number} lat
 * @param {Number} long
 */
export const yahooWeatherProvider = (lat, long) => {
  if (isNil(lat) || isNil(long)) return Promise.reject();

  let endpoint = 'https://query.yahooapis.com/v1/public/yql';

  // build query to request city, humidity, wind speed, temperature, weather code and description
  let fragments = [
    'location.city',
    'item.condition', // contains weather code and description
    'atmosphere.humidity',
    'wind.speed'
  ].join(', ');
  let root = 'weather.forecast';
  let condition = `where woeid in (select woeid from geo.places(1) where text="(${lat},${long})")`;
  let query = `select ${fragments} from ${root} ${condition}`;

  let urlEncoded = `${endpoint}?q=${escape(query)}&format=json&env=${escape(
    'store://datatables.org/alltableswithkeys'
  )}`;

  return simpleFetch(urlEncoded)
    .then(res => res.json())
    .then(data => data.query.results.channel);
};
