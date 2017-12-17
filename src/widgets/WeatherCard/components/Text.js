import React from 'react';
import { joinClasses } from '../utils/dom';
import './Text.css';

export default ({ children, className }) => (
  <span className={joinClasses('weather__text', className)}>{children}</span>
);
