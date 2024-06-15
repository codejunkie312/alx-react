import React from "react";
import { shallow } from "enzyme";
import CourseList from "./CourseList";
import CourseListRow from "./CourseListRow";

describe("<CourseList />", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.exists()).toBe(true);
  });

  it("renders a table element with a thead and tbody elements", () => {
    const wrapper = shallow(<CourseList />);
    const table = wrapper.find("table");
    expect(table).toHaveLength(1);
    expect(table.find("thead")).toHaveLength(1);
    expect(table.find("tbody")).toHaveLength(1);
  });

  it("renders two CourseListRow components inside the thead element", () => {
    const wrapper = shallow(<CourseList />);
    const thead = wrapper.find("thead");
    expect(thead.find(CourseListRow)).toHaveLength(2);
  });

  it("renders three CourseListRow components inside the tbody element", () => {
    const wrapper = shallow(<CourseList />);
    const tbody = wrapper.find("tbody");
    expect(tbody.find(CourseListRow)).toHaveLength(3);
  });
  
})