import React from 'react';
import { shallow } from 'enzyme';
import WeatherIcon from './WeatherIcon';

const baseClass = 'wi';
const testClass = 'test-class';
const testName = 'test-name';

describe('components/WeatherIcon', () => {
  it('renders without errors', () => {
    shallow(<WeatherIcon />);
  });

  it('renders an <i></i> element', () => {
    let mounted = shallow(<WeatherIcon />);
    expect(mounted.find('i').length).toBe(1);
  });

  it('correctly generates the classname', () => {
    let mounted = shallow(
      <WeatherIcon className={testClass} name={testName} />
    );
    expect(mounted.hasClass(testClass)).toBe(true);
    expect(mounted.hasClass(baseClass)).toBe(true);
    expect(mounted.hasClass('wi-' + testName)).toBe(true);
  });
});
