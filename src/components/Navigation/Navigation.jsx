import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import "./Navigation.css";

const Navigation = observer(({ userStore }) => {
  const darkModeSettings = (e) => {
    userStore.setDarkMode(e);
    localStorage.setItem("qr_generator-darkmode", JSON.stringify(e));
  };
  useEffect(() => {
    try {
      var color = JSON.parse(localStorage.getItem("qr_generator-darkmode"));
      if (color === false || color === true) {
        userStore.setDarkMode(color);
      }
    } catch (err) {
      console.log("error" + err);
    }
  }, [userStore]);
  return (
    <div>
      <nav
        className={
          userStore.darkMode !== true
            ? "navbar  navbar-expand-lg row navbar-light bg-light"
            : "navbar navbar-expand-lg row navbar-dark bg-secondary"
        }
      >
        <a className="navbar-brand" href="/#">
          QR Generator
        </a>
        <div className="" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <button
                type="button"
                className="btn toggle-switch btn-primary"
                onClick={() => darkModeSettings(!userStore.darkMode)}
              >
                Toggle Dark Mode
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
});

export default Navigation;
