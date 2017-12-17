import React from 'react';
import { shallow, mount } from 'enzyme';
import Value from './Value';

describe('components/Value', () => {
  it('renders without errors', () => {
    shallow(<Value />);
  });

  it('renders the value props', () => {
    let testValue = 'test-value';
    let mounted = mount(<Value value={testValue} />);
    expect(mounted.text()).toEqual(testValue);
  });

  it('renders an empty string if value is null', () => {
    let mounted = mount(<Value value={null} />);
    expect(mounted.text()).toEqual('');
  });

  it('renders the nullContent prop if specified and value is null', () => {
    let mounted = mount(<Value value={null} nullContent="0" />);
    expect(mounted.text()).toEqual('0');
  });

  it('renders the value using the formatter if specified', () => {
    let formatter = val => Math.round(val) + '°';
    let mounted = mount(<Value value={13.2} formatter={formatter} />);
    expect(mounted.text()).toEqual('13°');
  });
});
