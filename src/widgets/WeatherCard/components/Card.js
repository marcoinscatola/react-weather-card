import React from 'react';
import './Card.css';
import { joinClasses } from '../utils/dom';

export default ({ children, className }) => (
  <div className={joinClasses('weather__card', className)}> {children} </div>
);
