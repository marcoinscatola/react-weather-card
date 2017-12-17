import React from 'react';
import { shallow } from 'enzyme';
import Text from './Text';

const TestChild = () => null;
const baseClass = 'weather__text';
const testClass = 'test-class';

describe('components/Text', () => {
  it('renders without errors', () => {
    shallow(<Text />);
  });

  it('renders its children', () => {
    let mounted = shallow(
      <Text>
        <TestChild />
      </Text>
    );
    expect(mounted.find(TestChild).length).toBe(1);
  });

  it('correctly generates the classname', () => {
    let mounted = shallow(<Text className={testClass} />);
    expect(mounted.hasClass(testClass)).toBe(true);
    expect(mounted.hasClass(baseClass)).toBe(true);
  });
});
