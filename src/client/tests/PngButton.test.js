import React from "react";
import { shallow } from "enzyme";

import { PngButton } from "../components/Shared";

describe("HomeTab", () => {
  const props = {
    handleClick: jest.fn(),
    classNames: ''
  };
  const wrapper = shallow(<PngButton {...props} />);

  it("should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
