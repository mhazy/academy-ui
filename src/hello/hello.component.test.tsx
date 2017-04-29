import * as React from 'react';
import { shallow } from 'enzyme';

import { Hello } from './hello.component';

describe('Component: Hello', () => {
  it('should render without throwing an error', () => {
    const wrapper = shallow(<Hello greeting="Hello" />);
    expect(wrapper.contains(<p>Hello Component</p>)).toBe(true);
  });
});
