import React from 'react';
import Front from './Front';
import Back from './Back';
import flippable from './hoc/flippable';
import withGeolocation from './hoc/withGeolocation';
import withWeatherData from './hoc/withWeatherData';
import { compose } from './utils/generic';

import './components/WeatherIcon';

const WeatherCard = flippable(props => ({
  width: 255,
  height: 365
}))(Front, Back);

const fahrenheitToCelsius = f => (f - 32) / 1.8;

const extractWeatherData = ({
  item: { condition: { temp, code, text } },
  atmosphere: { humidity },
  wind: { speed }
}) => ({
  temperature: fahrenheitToCelsius(parseFloat(temp)),
  perceived: fahrenheitToCelsius(parseFloat(temp)),
  wind: parseFloat(speed),
  humidity: parseFloat(humidity),
  iconCode: 'yahoo-' + code,
  description: text
});

const enhance = compose(
  withGeolocation(position => ({
    latitude: position.latitude,
    longitude: position.longitude
  })),
  withWeatherData(
    data => ({
      weather: extractWeatherData(data),
      place: data.location.city
    }),
    props => ({
      latitude: props.latitude,
      longitude: props.longitude
    })
  )
);

const ConnectedWeatherCard = enhance(WeatherCard);

export default props => <ConnectedWeatherCard />;
