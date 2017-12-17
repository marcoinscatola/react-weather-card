import React from 'react';
import PropTypes from 'prop-types';
import Text from './Text';
import { isNil, isFunction } from '../utils/generic';

const Value = ({
  value,
  formatter = null,
  nullContent = '',
  ...otherProps
}) => {
  let content;
  if (isNil(value)) {
    content = nullContent;
  } else {
    content = isFunction(formatter) ? formatter(value) : value;
  }

  return <Text {...otherProps}>{content}</Text>;
};

Value.propTypes = {
  value: PropTypes.any,
  nullContent: PropTypes.any,
  formatter: PropTypes.func
};

export default Value;
