import React from 'react';
import PropTypes from 'prop-types';
import Value from '../components/Value';
import './Summary.css';

const Summary = ({ description }) => (
  <div className="weather-summary">
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
