import React from 'react';
import PropTypes from 'prop-types';
import Value from '../components/Value';
import Text from '../components/Text';
import { formatTemperature } from '../utils/formatter';
import './Perceived.css';

const Perceived = ({ value }) => (
  <div className="weather-perceived">
    <Text>PERCEIVED</Text>
    <br />
    <Value value={value} formatter={formatTemperature} nullContent="0°" />
  </div>
);

Perceived.propTypes = {
  value: PropTypes.number
};

export default Perceived;
