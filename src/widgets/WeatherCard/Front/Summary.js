import React from 'react';
import PropTypes from 'prop-types';
import Value from '../components/Value';
import WeatherIcon from '../components/WeatherIcon';
import './Summary.css';

const Summary = ({ description, iconCode }) => (
  <div className="weather-summary">
    <WeatherIcon name={iconCode} className="weather-summary__icon" />
    <Value
      className="weather-summary__label"
      value={description}
      nullContent="N.D."
    />
  </div>
);

Summary.propTypes = {
  value: PropTypes.string
};

export default Summary;
