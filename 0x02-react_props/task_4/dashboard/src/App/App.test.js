import React from "react";
import { shallow } from "enzyme";
import App from './App';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import CourseList from "../CourseList/CourseList";

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

  it('should contain the login component if not logged in', () => {
    const app = shallow(<App isLoggedIn={false}/>);
    expect(app.find(Login).length).toBe(1);
    expect(app.find(CourseList).length).toBe(0);
  });

  it("should contain the CourseList component if logged in", () => {
    const app = shallow(<App isLoggedIn={true}/>);
    expect(app.find(Login).length).toBe(0);
    expect(app.find(CourseList).length).toBe(1);
  });

  it('should contain the footer component', () => {
    expect(wrapper.find(Footer).length).toBe(1);
  });

});
