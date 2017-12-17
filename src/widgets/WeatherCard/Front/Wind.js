import React from 'react';
import PropTypes from 'prop-types';
import Value from '../components/Value';
import Text from '../components/Text';
import { formatWindSpeed } from '../utils/formatter';
import './Wind.css';

const Wind = ({ value }) => (
  <div className="weather-wind">
    <Text>WIND</Text>
    <br />
    <Value value={value} formatter={formatWindSpeed} nullContent="0%" />
  </div>
);

Wind.propTypes = {
  value: PropTypes.number
};

export default Wind;
