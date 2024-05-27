import React from "react";
import { shallow } from "enzyme";
import Login from './Login';

describe('Login', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Login />);
  });

  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('renders 2 label elements', () => {
    expect(wrapper.find('label').length).toBe(2);
  });

  it('renders 3 input elements', () => {
    expect(wrapper.find('input').length).toBe(3);
  });
});