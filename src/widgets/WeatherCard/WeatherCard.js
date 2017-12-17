import React from 'react';
import Front from './Front';
import Back from './Back';
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

export default props => [
  <Front {...placeholderFrontProps} />,
  <Back {...placeholderBackProps} />
];
