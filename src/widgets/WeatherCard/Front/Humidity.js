import React from 'react';
import PropTypes from 'prop-types';
import Value from '../components/Value';
import Text from '../components/Text';
import { formatPercentage } from '../utils/formatter';
import './Humidity.css';

const Humidity = ({ value }) => (
  <div className="weather-humidity">
    <Text>HUMIDITY</Text>
    <br />
    <Value
      value={value}
      formatter={formatPercentage}
      nullContent={formatPercentage(0)}
    />
  </div>
);

Humidity.propTypes = {
  value: PropTypes.number
};

export default Humidity;
