import React from 'react';
import Front from './Front';
import './components/WeatherIcon';
const placeholderProps = {
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

export default props => <Front {...placeholderProps} />;
