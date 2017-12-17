import { isNil, isFunction, isString, sequence, compose } from './generic';

describe('utils/generic -> isNil', () => {
  it('returns true if the value is null or undefined', () => {
    expect(isNil()).toBe(true);
    expect(isNil(null)).toBe(true);
    expect(isNil(undefined)).toBe(true);
  });
  it('returns false if the value is not null or undefined', () => {
    expect(isNil(1)).toBe(false);
    expect(isNil(0)).toBe(false);
    expect(isNil('test')).toBe(false);
    expect(isNil([])).toBe(false);
    expect(isNil({})).toBe(false);
    expect(isNil(false)).toBe(false);
    expect(isNil(() => null)).toBe(false);
  });
});

describe('utils/generic -> isString', () => {
  it('returns true if the value is of type string', () => {
    expect(isString('test')).toBe(true);
  });
  it('returns false if the value is not of type string', () => {
    expect(isString()).toBe(false);
    expect(isString(null)).toBe(false);
    expect(isString(undefined)).toBe(false);
    expect(isString(1)).toBe(false);
    expect(isString(0)).toBe(false);
    expect(isString([])).toBe(false);
    expect(isString({})).toBe(false);
    expect(isString(false)).toBe(false);
    expect(isString(() => null)).toBe(false);
  });
});

describe('utils/generic -> isFunction', () => {
  it('returns true if the value is of type function', () => {
    expect(isFunction(function() {})).toBe(true);
    expect(isFunction(() => {})).toBe(true);
  });
  it('returns false if the value is not of type function', () => {
    expect(isFunction()).toBe(false);
    expect(isFunction(null)).toBe(false);
    expect(isFunction(undefined)).toBe(false);
    expect(isFunction(1)).toBe(false);
    expect(isFunction(0)).toBe(false);
    expect(isFunction([])).toBe(false);
    expect(isFunction({})).toBe(false);
    expect(isFunction(false)).toBe(false);
  });
});

describe('utils/generic -> sequence', () => {
  it('returns a function that executes the parameters functions sequentially from left to right', () => {
    let double = x => 2 * x;
    let square = x => x * x;
    let doubleSquare = sequence(double, square);
    expect(doubleSquare(3)).toBe(36); // (3*2)^2
  });
  it('returns a variadic function (arity equals to the first function arity)', () => {
    let sum = (x, y) => x + y;
    let double = x => 2 * x;
    let square = x => x * x;
    let sumDoubleSquare = sequence(sum, double, square);
    expect(sumDoubleSquare(1, 2)).toBe(36); // ((1+2)*2)^2

    let three = () => 3;
    let threeSquare = sequence(three, square);
    expect(threeSquare()).toBe(9); // 3^2
  });
  it('returns an identity function if no parameters are specified', () => {
    let identity = sequence();
    expect(identity('test')).toBe('test');
  });
});

describe('utils/generic -> compose', () => {
  it('returns a function that executes the composes the parameters functions from right to left', () => {
    let double = x => 2 * x;
    let square = x => x * x;
    let squareDouble = compose(double, square);
    expect(squareDouble(3)).toBe(18); // (3^2)*2
  });
  it('returns a variadic function (arity equals to the last function arity)', () => {
    let sum = (x, y) => x + y;
    let double = x => 2 * x;
    let square = x => x * x;
    let sumDoubleSquare = compose(double, square, sum);
    expect(sumDoubleSquare(1, 2)).toBe(18); // ((1+2)^2)*2

    let three = () => 3;
    let threeSquare = compose(square, three);
    expect(threeSquare()).toBe(9); // 3^2
  });
  it('returns an identity function if no parameters are specified', () => {
    let identity = compose();
    expect(identity('test')).toBe('test');
  });
});
