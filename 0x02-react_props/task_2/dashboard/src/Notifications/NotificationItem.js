import React from 'react';

function NotificationItem({type, value, html}) {
  if (html) {
    return (
      <li dangerouslySetInnerHTML={html}></li>
    );
  } else {
    return (
      <li data-notification-type={type || 'default'}>{value}</li>
    );
  }
};

export default NotificationItem;
