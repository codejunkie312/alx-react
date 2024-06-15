import React from "react";
import PropTypes from "prop-types";
import closeLogo from "../assets/close-icon.png";
import './Notifications.css';
import { getLatestNotification } from "../utils/utils";
import NotificationItem from "./NotificationItem";

function Notifications({displayDrawer=false}) {
  return (
    <>
      <div className="menuItem">Your notifications</div>
      {displayDrawer ?
        (<div className="Notifications">
          <p>Here is the list of notifications</p>
          <button
          style={{ position: 'absolute', top:'29px', right: '5px' }}
          aria-label="Close"
          onClick={console.log('Close button has been clicked')}>
            <img src={closeLogo} alt="close"/>
          </button>
          <ul>
            <NotificationItem type="default" value="New course available" />
            <NotificationItem type="urgent" value="New resume available" />
            <NotificationItem html={getLatestNotification()} />
          </ul>
        </div>) : (null)}
    </>
  );
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool
};

export default Notifications;