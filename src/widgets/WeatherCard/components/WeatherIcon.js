import React from 'react';
import PropTypes from 'prop-types';
import { joinClasses } from '../utils/dom';
import '../libs/weather-icons-master/css/weather-icons.min.css';

const WeatherIcon = ({ name, className }) => {
  let c = joinClasses('wi', name ? `wi-${name}` : null, className);
  return <i className={c} />;
};

WeatherIcon.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string
};

export default WeatherIcon;
