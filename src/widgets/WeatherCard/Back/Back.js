import React from 'react';
import PropTypes from 'prop-types';
import Card from '../components/Card';
import Map from './Map';
import './Back.css';

const Back = ({ latitude, longitude }) => (
  <Card>
    <div className="weather-back__map">
      <Map latitude={latitude} longitude={longitude} width={256} height={365} />
    </div>
  </Card>
);

Back.propTypes = {
  latitude: PropTypes.number,
  longitude: PropTypes.number
};

export default Back;
