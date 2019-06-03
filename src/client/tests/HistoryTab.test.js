import React from "react";
import { shallow } from "enzyme";

import HistoryTab from "../components/HistoryTab";

describe("HistoryTab", () => {
  const props = {
    getPastDetails: jest.fn()
  };
  const wrapper = shallow(<HistoryTab {...props} />);

  it("should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
