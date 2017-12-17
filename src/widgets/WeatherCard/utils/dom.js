import { isString } from './generic';

export const joinClasses = (...classes) => classes.filter(isString).join(' ');
