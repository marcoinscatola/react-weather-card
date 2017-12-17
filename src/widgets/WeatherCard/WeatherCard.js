import React from 'react';
import Front from './Front';

const placeholderProps = {
  weather: {
    temperature: 34,
    wind: 10,
    perceived: 36,
    humidity: 80,
    code: '1',
    description: 'Sunny'
  },
  place: 'Italy',
  dayOfWeek: 2
};

export default props => <Front {...placeholderProps} />;
