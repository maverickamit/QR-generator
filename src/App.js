import "./App.css";
import QrDisplay from "./components/QrDisplay/QrDisplay";
import LinkInput from "./components/LinkInput/LinkInput";
import TextInput from "./components/TextInput/TextInput";
import EmailInput from "./components/EmailInput/EmailInput";
import PhoneInput from "./components/PhoneInput/PhoneInput";
import WifiInput from "./components/WifiInput/WifiInput";
import PaypalInput from "./components/PaypalInput/PaypalInput";
import Navigation from "./components/Navigation/Navigation";
import TopMenuBar from "./components/TopMenuBar/TopMenuBar";
import { observer } from "mobx-react-lite";
import { Router } from "@reach/router";

const App = observer(({ userStore }) => {
  return (
    <div
      className={
        userStore.darkMode !== true
          ? "App container-fluid bg-white fill-height"
          : "App container-fluid bg-dark text-light fill-height"
      }
    >
      <Navigation userStore={userStore} />
      <TopMenuBar userStore={userStore} />
      <Router>
        <LinkInput userStore={userStore} path="/link" />
        <TextInput userStore={userStore} path="/text" />
        <EmailInput userStore={userStore} path="/email" />
        <PhoneInput userStore={userStore} path="/phone" />
        <WifiInput userStore={userStore} path="/wifi" />
        <PaypalInput userStore={userStore} path="/paypal" />
        <LinkInput userStore={userStore} path="/" />
      </Router>
      <QrDisplay userStore={userStore} />
    </div>
  );
});

export default App;
