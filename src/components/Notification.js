import constants from "../utils/constants.js";
const {
  DEFAULT,
  FAILED,
  NOTIFICATION_FAILED,
  NOTIFICATION_SUCCESS,
  NOTIFICATION,
  SUCCESS,
} = constants;

class Notification {
  constructor(title) {
    this.title = title;
  }
  buildNotification(notification) {
    switch (notification.type) {
      case SUCCESS:
        return `
          <div id="notification" class="notification-${notification.type} show">
            <p id="message-title">${notification.title}</p>
            <input id="complete" class="complete-${notification.type}" type="submit" value=${notification.buttom}>
          </div>
        `;
      case FAILED:
        return `
          <div id="notification" class="notification-${notification.type} show">
            <p id="message-title">${notification.title}</p>
            <p id="message-response">${notification.response}</p>
            <input id="complete" class="complete-${notification.type}" type="submit" value=${notification.buttom}>
          </div>
        `;
      case DEFAULT:
        return `
          <div id="notification" class="notification-${notification.type} show">
            <p id="message-title">${notification.title}</p>
            <input id="complete" class="complete-${notification.type}" type="submit" value=${notification.buttom}>
          </div>
        `;
      default:
        break;
    }
  }

  getNotification() {
    const { type, buttom } = NOTIFICATION;
    let title = this.title
    let notification = { type, title, buttom };
    return this.buildNotification(notification);
  }

  getNotificationFailed(correctAnswer) {
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
