import { makeAutoObservable } from "mobx";

export class UserStore {
  qrData = "";
  darkMode = true;
  constructor() {
    makeAutoObservable(this);
  }
  setQrData(qrData) {
    this.qrData = qrData;
  }
  setTextMessage(textMessage) {
    this.textMessage = textMessage;
  }
  setDarkMode(darkMode) {
    this.darkMode = darkMode;
  }
}
