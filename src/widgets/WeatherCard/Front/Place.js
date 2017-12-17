import React from 'react';
import PropTypes from 'prop-types';
import Value from '../components/Value';
import './Place.css';

const Place = ({ value }) => (
  <Value className="weather-place" value={value} nullContent="N.D." />
);

Place.propTypes = {
  value: PropTypes.string
};

export default Place;
