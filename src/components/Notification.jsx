import React, { useEffect, useState } from "react";
import constants from "../utils/constants.js";
import {
  BottonCompleteDefault,
  BottonCompleteFailed,
  BottonCompleteSuccess,
  MessageTitleDefault,
  MessageTitleFailed,
  MessageTitleSuccess,
  NotificationDefault,
  NotificationFailed,
  NotificationSuccess,
  ResponseFailed,
} from "../styles/styleNotification.js";

const { DEFAULT, FAILED, SUCCESS } = constants;


const Notification = ({
  notification,
  isVisible,
  handleComplete,
  handleContinue,
  handleReset,
}) => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(isVisible);
  }, [isVisible]);

  const buildNotification = (notification) => {
    switch (notification.type) {
      case SUCCESS:
        return (
          <>
            <NotificationSuccess
              id="notification"
              className={show ? "show" : ""}
            >
              <MessageTitleSuccess id="message-title">
                {notification.title}
              </MessageTitleSuccess>
              <BottonCompleteSuccess id="complete" onClick={handleComplete}>
                {notification.buttom}
              </BottonCompleteSuccess>
            </NotificationSuccess>
          </>
        );

      case FAILED:
        return (
          <>
            <NotificationFailed
              id="notification"
              className={isVisible ? "show" : ""}
            >
              <MessageTitleFailed id="message-title">
                {notification.title}
              </MessageTitleFailed>
              <ResponseFailed id="message-resResponseFailedonse">
                {notification.response}
              </ResponseFailed>
              <BottonCompleteFailed id="complete" onClick={handleContinue}>
                {notification.buttom}
              </BottonCompleteFailed>
            </NotificationFailed>
          </>
        );
      case DEFAULT:
        return (
          <>
            <NotificationDefault
              id="notification"
              className={isVisible ? "show" : ""}
            >
              <MessageTitleDefault id="message-title">
                {notification.title}
              </MessageTitleDefault>
              <BottonCompleteDefault id="complete" onClick={handleReset}>
                {notification.buttom}
              </BottonCompleteDefault>
            </NotificationDefault>
          </>
        );
      default:
        break;
    }
  };
  return <>{buildNotification(notification)}</>;
};
export default Notification;
