import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

const TestChild = () => null;
const baseClass = 'weather__card';
const testClass = 'test-class';

describe('components/Card', () => {
  it('renders without errors', () => {
    shallow(<Card />);
  });

  it('renders its children', () => {
    let mounted = shallow(
      <Card>
        <TestChild />
      </Card>
    );
    expect(mounted.find(TestChild).length).toBe(1);
  });

  it('correctly generates the classname', () => {
    let mounted = shallow(<Card className={testClass} />);
    expect(mounted.hasClass(testClass)).toBe(true);
    expect(mounted.hasClass(baseClass)).toBe(true);
  });
});
