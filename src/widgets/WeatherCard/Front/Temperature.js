import React from 'react';
import PropTypes from 'prop-types';
import Value from '../components/Value';
import { formatTemperature } from '../utils/formatter';
import './Temperature.css';

const Temperature = ({ value }) => (
  <Value
    className="weather-temperature"
    value={value}
    formatter={formatTemperature}
    nullContent={formatTemperature(0)}
  />
);

Temperature.propTypes = {
  value: PropTypes.number
};

export default Temperature;
