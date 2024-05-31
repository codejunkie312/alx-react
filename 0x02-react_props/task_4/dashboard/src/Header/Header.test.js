import React from "react";
import { shallow } from "enzyme";
import Header from './Header';

describe('Header', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Header />);
  });

  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('renders an img element', () => {
    expect(wrapper.find('img').length).toBe(1);
  });

  it('renders an h1 element', () => {
    expect(wrapper.find('h1').length).toBe(1);
  });
});
