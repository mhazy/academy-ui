import { shallow } from "enzyme";
import * as React from "react";

import { Hello } from "./hello";


describe("Component: Hello", () => {
  it("should render without throwing an error", () => {
    const wrapper = shallow(<Hello greeting="Hello" />);
    expect(wrapper.contains(<p className="hello">Hello Component</p>)).toBe(true);
  });
});
