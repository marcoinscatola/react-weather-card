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

/**
 * Minimal fetch polyfill, doesn't handle response headers, credentials, blobs, streaming etc
 */
export const simpleFetch = (function() {
  // use native fetch if available
  if (window && window.fetch) return window.fetch;
  // return a minimal fetch implementation
  return (url, { method = 'get', headers = {}, body } = {}) =>
    new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest();
      xhr.open(method, url, true);

      xhr.onerror = err => reject(err);

      xhr.onabort = err => reject(err);

      xhr.onload = () => {
        let { status, statusText, responseText } = xhr;
        let response = {
          text: () => Promise.resolve(responseText),
          json: () => Promise.resolve(JSON.parse(responseText))
        };
        resolve({
          status: status,
          statusText: statusText,
          ...response
        });
      };

      xhr.send(body);
    });
})();
