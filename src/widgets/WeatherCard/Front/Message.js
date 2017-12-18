import React from 'react';
import PropTypes from 'prop-types';
import Text from '../components/Text';
import './Message.css';

const Message = ({ children }) => (
  <div className="weather-message">
    <Text className="weather-message__text">{children}</Text>
  </div>
);

Message.propTypes = {
  children: PropTypes.node
};

export default Message;
