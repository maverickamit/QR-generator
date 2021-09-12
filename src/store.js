import { makeAutoObservable } from "mobx";

export class UserStore {
  linkUrl = "";
  darkMode = true;

  constructor() {
    makeAutoObservable(this);
  }
  setLinkUrl(linkUrl) {
    this.linkUrl = linkUrl;
  }
  setDarkMode(darkMode) {
    this.darkMode = darkMode;
  }
}
