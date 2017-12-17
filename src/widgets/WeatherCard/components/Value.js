import React from 'react';
import Text from './Text';
import { isNil, isFunction } from '../utils/generic';

export default ({
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
