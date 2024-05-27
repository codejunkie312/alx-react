import React from "react";
import closeLogo from "../assets/close-icon.png";
import './Notifications.css';
import { getLatestNotification } from "../utils/utils";
import NotificationItem from "./NotificationItem";

function Notifications() {
  return (
    <div className="Notifications">
      <p>Here is the list of notifications</p>
      <button
      style={{ position: 'absolute', top:'15px', right: '10px' }}
      aria-label="Close"
      onClick={console.log('Close button has been clicked')}>
        <img src={closeLogo} alt="close"/>
      </button>
      <ul>
        <NotificationItem type="default" value="New course available" />
        <NotificationItem type="urgent" value="New resume available" />
        <NotificationItem html={getLatestNotification()} />
      </ul>
    </div>
  );
}

export default Notifications;