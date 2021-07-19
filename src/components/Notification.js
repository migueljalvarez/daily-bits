import constants from "../utils/constants.js";

class Notification {
  constructor() {}
  static buildNotification(notification) {
    switch (notification.type) {
      case "success":
        return `
          <div id="notification" class="notification-${notification.type} show">
            <p id="message-title">${notification.title}</p>
            <input id="complete" class="complete-${notification.type}" type="submit" value=${notification.buttom}>
          </div>
        `;
      case "failed":
        return `
          <div id="notification" class="notification-${notification.type} show">
            <p id="message-title">${notification.title}</p>
            <p id="message-response">${notification.response}</p>
            <input id="complete" class="complete-${notification.type}" type="submit" value=${notification.buttom}>
          </div>
        `;
      case "reset":
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
  static buildNotificationFailed(match) {
    const { type, title, buttom } = constants.NOTIFICATION_FAILED;
    let notification = { type, title, buttom, response: match.label };
    return this.buildNotification(notification);
  }
  static buildNotificationReset() {
    const { type, title, buttom } = constants.NOTIFICATION_RESET;
    let notification = { type, title, buttom };
    return this.buildNotification(notification);
  }
  static buildNotificationSuccess() {
    const { type, title, buttom } = constants.NOTIFICATION_SUCCESS;
    let notification = { type, title, buttom };
    return this.buildNotification(notification);
  }
  static get(type, match) {
    let notification;
    switch (type) {
      case "success":
        notification = this.buildNotificationSuccess();
        break;
      case "failed":
        notification = this.buildNotificationFailed(match);
        break;
      case "reset":
        notification = this.buildNotificationReset();
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
