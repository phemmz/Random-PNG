import React from "react";
import { shallow } from "enzyme";

import { TabDetails } from "../components/Shared";

describe("TabDetails", () => {
  const props = {
    totalPhoneNumbersGenerated: 200,
    minNumber: '0102010201',
    maxNumber: '0902010201',
    numberList: 'asas'
  };
  const wrapper = shallow(<TabDetails {...props} />);

  it("should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
