import React from "react";
import { shallow } from "enzyme";
import Notifications from "./Notifications";

describe('Notifications', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Notifications />);
  });

  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('renders 3 list items', () => {
    expect(wrapper.find('li').length).toBe(3);
  });

  it('renders text \'Here is the list of notifications\'', () => {
    expect(wrapper.text().includes('Here is the list of notifications')).toBe(true);
  });

  afterEach(() => {
    wrapper.unmount();
  });
});
