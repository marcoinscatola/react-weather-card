import React from 'react';
import PropTypes from 'prop-types';
import { joinClasses } from '../utils/dom';
import './Card.css';

const Card = ({ children, className }) => (
  <div className={joinClasses('weather__card', className)}>{children}</div>
);

Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default Card;
