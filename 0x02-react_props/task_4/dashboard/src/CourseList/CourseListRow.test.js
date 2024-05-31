import React from "react";
import { shallow } from "enzyme";
import CourseListRow from "./CourseListRow";

describe('CourseListRow', () => {
  let wrapper;

  it('renders without crashing', () => {
    wrapper = shallow(<CourseListRow textFirstCell="test1" />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders two \'td\' cells when isHeader is false inside a tr element', () => {
    wrapper = shallow(<CourseListRow textFirstCell="test1" />);
    const tr = wrapper.find('tr');
    expect(tr).toHaveLength(1);
    expect(tr.find('td')).toHaveLength(2);
    expect(wrapper.find('td')).toHaveLength(2);    
  });

  it('renders one \'th\' with \'colspan = 2\' cell when isHeader is true inside a tr element and textSecondCell is null', () => {
    wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="test1" />);
    const tr = wrapper.find('tr');
    expect(tr).toHaveLength(1);
    expect(tr.find('th')).toHaveLength(1);
    expect(tr.find('th').prop('colSpan')).toBe('2');
    expect(wrapper.find('th')).toHaveLength(1);
  });

  it('renders two \'th\' cells when isHeader is true inside a tr element and textSecondCell is not null', () => {
    wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="test1" textSecondCell="test2" />);
    const tr = wrapper.find('tr');
    expect(tr).toHaveLength(1);
    expect(tr.find('th')).toHaveLength(2);
    expect(wrapper.find('th')).toHaveLength(2);
  });
});