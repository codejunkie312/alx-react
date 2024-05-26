import React from "react";
import { shallow } from "enzyme";
import App from './App';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should contain the notifications component', () => {
    expect(wrapper.find(Notifications).length).toBe(1);
  });

  it('should contain the header component', () => {
    expect(wrapper.find(Header).length).toBe(1);
  });

  it('should contain the login component', () => {
    expect(wrapper.find(Login).length).toBe(1);
  });

  it('should contain the footer component', () => {
    expect(wrapper.find(Footer).length).toBe(1);
  });

});
