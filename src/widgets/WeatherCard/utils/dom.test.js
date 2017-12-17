import { joinClasses } from './dom';

describe('utils/dom -> joinClasses', () => {
  it('returns an empty string if called with no parameters', () => {
    expect(joinClasses()).toBe('');
  });
  it('generates the className correctly', () => {
    expect(joinClasses('test', 'class')).toBe('test class');
  });
  it('ignores null or undefined values', () => {
    expect(joinClasses('test', null, 'class', undefined)).toBe('test class');
  });
});
