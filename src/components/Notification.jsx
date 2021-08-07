import React, { useEffect, useState } from "react";
import constants from "../utils/constants.js";
import styled from "styled-components";

const {
  CATEGORY,
  DEFAULT,
  FAILED,
  NOTIFICATION_FAILED,
  NOTIFICATION_SUCCESS,
  NOTIFICATION,
  SUCCESS,
} = constants;
let category = localStorage.getItem(CATEGORY);

const NotificationSuccess = styled.div`
  background-color: #acffcf;
  display: none;
  flex-direction: column;
  position: absolute;
  width: 100%;
  bottom: -1000px;
  transition: all 1.4s ease;
`;
const MessageTitleSuccess = styled.p`
  font-weight: bold;
  margin-top: 15px;
  margin-left: 15px;
  color: #16161a;
`;
const BottonCompleteSuccess = styled.button`
  border-radius: 16px;
  width: 328px;
  height: 50px;
  display: block;
  margin: 10px auto;
  color: #ffffff;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  background-color: #2cb67d;
  box-shadow: 0 1px 1px 1px #0f915b;
`;
const NotificationFailed = styled.div`
  transition: all 1.4s ease;
  display: none;
  flex-direction: column;
  position: absolute;
  background-color: #f9cfd7;
  width: 100%;
  bottom: -1000px;
`;
const BottonCompleteFailed = styled.button`
  border-radius: 16px;
  width: 328px;
  height: 50px;
  display: block;
  margin: 10px auto;
  color: #b81e3b;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  background-color: #ef4565;
  box-shadow: 0 1px 1px 1px #b81e3b;
`;

const NotificationDefault = styled.div`
  background-color: #ffffff;
  display: none;
  flex-direction: column;
  position: absolute;
  width: 100%;
  bottom: -1000px;
  transition: all 1.4s ease;
`;
const MessageTitleDefault = styled.p`
  font-weight: bold;
  margin-top: 15px;
  margin-left: 15px;
  color: #16161a;
`;
const BottonCompleteDefault = styled.button`
  border-radius: 16px;
  width: 328px;
  height: 50px;
  display: block;
  margin: 10px auto;
  color: #ffffff;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  background-color: gray;
  box-shadow: 0 1px 1px 1px #4a4a64;
`;

const MessageTitleFailed = styled.p`
  font-weight: bold;
  margin-top: 15px;
  margin-left: 15px;
  color: #b81e3b;
`;
const ResponseFailed = styled.p`
  margin-top: 0px;
  margin-left: 15px;
  margin-bottom: 0px;
  color: #b81e3b;
`;

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
        console.log("ENTRE A NOTIFICAR");
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
  // getNotification() {
  //   const { type, buttom } = NOTIFICATION;
  //   let title = this.title;
  //   let notification = { type, title, buttom };
  //   return this.buildNotification(notification);
  // }
};
export default Notification;
