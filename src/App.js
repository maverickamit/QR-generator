import "./App.css";
import QrDisplay from "./components/QrDisplay/QrDisplay";
import LinkInput from "./components/LinkInput/LinkInput";
import Navigation from "./components/Navigation/Navigation";
import TopMenuBar from "./components/TopMenuBar/TopMenuBar";
import { observer } from "mobx-react-lite";
import { Router } from "@reach/router";

const App = observer(({ userStore }) => {
  return (
    <div
      className={
        userStore.darkMode !== true
          ? "App container-fluid bg-white"
          : "App container-fluid bg-dark text-light"
      }
    >
      <Navigation userStore={userStore} />
      <TopMenuBar userStore={userStore} />
      <Router>
        <LinkInput userStore={userStore} path="/link" />
        <LinkInput userStore={userStore} path="/" />
      </Router>
      <QrDisplay userStore={userStore} />
    </div>
  );
});

export default App;
