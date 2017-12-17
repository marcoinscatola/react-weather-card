import React from 'react';
import Front from './Front';
import Back from './Back';
import flippable from './hoc/flippable';
import './components/WeatherIcon';

const placeholderFrontProps = {
  weather: {
    temperature: 34,
    wind: 10,
    perceived: 36,
    humidity: 80,
    iconCode: 'yahoo-14',
    description: 'Sunny'
  },
  place: 'Italy',
  dayOfWeek: 2
};

const placeholderBackProps = {
  latitude: 41.9,
  longitude: 12.49
};

const WeatherCard = flippable(props => ({
  width: 255,
  height: 365
}))(Front, Back);

export default props => (
  <WeatherCard {...placeholderFrontProps} {...placeholderBackProps} />
);
