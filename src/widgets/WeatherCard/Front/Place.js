import React from 'react';
import PropTypes from 'prop-types';
import Value from '../components/Value';
import PlaceIcon from './PlaceIcon';
import './Place.css';

const Place = ({ value }) => (
  <div className="weather-place">
    <PlaceIcon height={20} width={20}/>
    <Value className="weather-place__value" value={value} nullContent="N.D." />
  </div>  
);

Place.propTypes = {
  value: PropTypes.string
};

export default Place;
