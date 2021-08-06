import React from "react";
import constants from "../utils/constants.js";
import styled from "styled-components";

const {
  DEFAULT,
  FAILED,
  NOTIFICATION_FAILED,
  NOTIFICATION_SUCCESS,
  NOTIFICATION,
  SUCCESS,
} = constants;

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
const BottonCompleteSuccess = styled.input`
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
const BottonCompleteFailed = styled.input`
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
const BottonCompleteDefault = styled.input`
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
class Notification {
  constructor(title) {
    this.title = title;
  }
  buildNotification(notification) {
    switch (notification.type) {
      case SUCCESS:
        console.log("hola");
        return (
          <>
            <NotificationSuccess id="notification" className="show">
              <MessageTitleSuccess id="message-title">
                {notification.title}
              </MessageTitleSuccess>
              <BottonCompleteSuccess
                id="complete"
                type="submit"
                value={notification.buttom}
              />
            </NotificationSuccess>
          </>
        );
      case FAILED:
        return (
          <>
            <NotificationFailed id="notification" className="show">
              <MessageTitleFailed id="message-title">
                {notification.title}
              </MessageTitleFailed>
              <ResponseFailed id="message-resResponseFailedonse">
                {notification.response}
              </ResponseFailed>
              <BottonCompleteFailed
                id="complete"
                type="submit"
                value={notification.buttom}
              />
            </NotificationFailed>
          </>
        );
      case DEFAULT:
        return (
          <>
            <NotificationDefault id="notification" className="show">
              <p id="message-title">{notification.title}</p>
              <BottonCompleteDefault
                id="complete"
                type="submit"
                value={notification.buttom}
              />
            </NotificationDefault>
          </>
        );
      default:
        break;
    }
  }

  getNotification() {
    const { type, buttom } = NOTIFICATION;
    let title = this.title;
    let notification = { type, title, buttom };
    return this.buildNotification(notification);
  }

  getNotificationFailed(correctAnswer) {
    console.log(correctAnswer);
    const { type, title, buttom } = NOTIFICATION_FAILED;
    let notification = {
      type,
      title,
      buttom,
      response: correctAnswer.label || correctAnswer.validationLabel,
    };
    return this.buildNotification(notification);
  }
  getNotificationSuccess() {
    const { type, title, buttom } = NOTIFICATION_SUCCESS;
    let notification = { type, title, buttom };
    return this.buildNotification(notification);
  }
  get(type, correctAnswer) {
    let notification;
    switch (type) {
      case SUCCESS:
        notification = this.getNotificationSuccess();
        break;
      case FAILED:
        notification = this.getNotificationFailed(correctAnswer);
        break;
      default:
        break;
    }
    return notification;
  }
  static clean() {
    document.querySelector("#notification").innerHTML = "";
  }
}
export default Notification;
