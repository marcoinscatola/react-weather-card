import React from 'react';
import PropTypes from 'prop-types';
import { joinClasses } from '../utils/dom';
import Text from '../components/Text';
import './WeekDay.css';

const WeekDay = ({ label, current }) => {
  let className = joinClasses(
    'weather-week__day',
    current ? 'weather-week__day--current' : ''
  );
  return (
    <div className={className}>
      <Text>{label}</Text>
    </div>
  );
};

WeekDay.propTypes = {
  value: PropTypes.string
};

export default WeekDay;
