import React from "react";
import closeLogo from "../assets/close-icon.png";
import './Notifications.css';
import { getLatestNotification } from "../utils/utils";

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
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li dangerouslySetInnerHTML={getLatestNotification()}></li>
      </ul>
    </div>
  );
}

export default Notifications;