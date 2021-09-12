import { makeAutoObservable } from "mobx";

export class UserStore {
  linkUrl = "";

  constructor() {
    makeAutoObservable(this);
  }
  setLinkUrl(linkUrl) {
    this.linkUrl = linkUrl;
  }
}
