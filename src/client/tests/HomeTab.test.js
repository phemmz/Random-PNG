import React from "react";
import { shallow } from "enzyme";

import HomeTab from "../components/HomeTab";

describe("HomeTab", () => {
  const props = {
    numberGenerated: false,
    handleInputChange: jest.fn(),
    generateRandomPhoneNumbers: jest.fn(),
    totalAmountToGenerate: 20
  };
  const wrapper = shallow(<HomeTab {...props} />);

  it("should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
