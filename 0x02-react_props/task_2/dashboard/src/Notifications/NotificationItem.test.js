import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('NotificationItem', () => {
  let wrapper;
  const htmlContent = { __html: '<u>test</u>' };

  beforeEach(() => {
    wrapper = shallow(<NotificationItem type="default" value="test" />);
  });

  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('renders a list while passing type and value props', () => {
    const listItem = wrapper.find('li');
    expect(listItem.length).toBe(1);
    expect(listItem.text()).toBe('test');
    expect(listItem.prop('data-notification-type')).toBe('default');
  });

  it('renders html prop properly', () => {
    const htmlWrapper = shallow(<NotificationItem html={htmlContent} />);
    expect(htmlWrapper.find('li').html()).toBe('<li><u>test</u></li>');
  });
});
