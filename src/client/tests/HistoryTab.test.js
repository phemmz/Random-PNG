import React from "react";
import { shallow } from "enzyme";

import HistoryTab from "../components/HistoryTab";

describe("HistoryTab", () => {
  const props = {
    getFileDetails: jest.fn(),
    filenames: ['number-1560053355220.json'],
    generatedNumberData: {
      generatedPhoneNumberId: 'number-1560053355220',
      generatedPhoneNumbers: ['0101507997', '0999875346'],
      min: '0101507997',
      max: '0999875346',
      totalPhoneNumbersGenerated: 1000
    }
  };
  const wrapper = shallow(<HistoryTab {...props} />);

  it("should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
