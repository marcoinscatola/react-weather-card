// Common utilities, like those found in lodash, underscore etc

/**
 * Returns true if value is null or undefined
 */
export const isNil = value => value === null || typeof value === 'undefined';

/**
 * Returns true if value is of type function
 */
export const isFunction = value => typeof value === 'function';

/**
 * Returns true if value is of type function
 */
export const isString = value => typeof value === 'string';

/**
 * Function composition (left to right)
 */
export const sequence = (firstFn = val => val, ...fns) => (...args) =>
  fns.reduce((res, fn) => fn(res), firstFn(...args));

/**
 * Function composition (right to left)
 */
export const compose = (...fns) => sequence(...fns.reverse());
