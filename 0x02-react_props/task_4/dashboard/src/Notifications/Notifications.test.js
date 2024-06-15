import React from "react";
import { shallow } from "enzyme";
import Notifications from "./Notifications";
import NotificationItem from "./NotificationItem";

describe('Notifications', () => {
  let wrapper;

  it('renders without crashing', () => {
    wrapper = shallow(<Notifications />)
    expect(wrapper.exists()).toBe(true);
  });

  it('renders div.menuItem when displayDrawer is false', () => {
    expect(wrapper.find('.menuItem').length).toBe(1);
    expect(wrapper.find('.Notifications').length).toBe(0);
    expect(wrapper.find(NotificationItem).length).toBe(0)
  })

  it('renders 3 list items', () => {
    wrapper = shallow(<Notifications displayDrawer={true}/>)
    expect(wrapper.find('.menuItem').length).toBe(1);
    expect(wrapper.find('.Notifications').length).toBe(1);
    expect(wrapper.find(NotificationItem).length).toBe(3);
  });

  it('renders text \'Here is the list of notifications\'', () => {
    expect(wrapper.text().includes('Here is the list of notifications')).toBe(true);
  });

  it('renders the first NotificationItem with type and value props', () => {
    const firstItem = wrapper.find(NotificationItem).at(0);
    expect(firstItem.html()).toBe('<li data-notification-type="default">New course available</li>');
  });

});
