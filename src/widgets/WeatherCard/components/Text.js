import React from 'react';
import PropTypes from 'prop-types';
import { joinClasses } from '../utils/dom';
import './Text.css';

const Text = ({ children, className }) => (
  <span className={joinClasses('weather__text', className)}>{children}</span>
);

Text.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default Text;
