import "./App.css";
import QrDisplay from "./components/QrDisplay/QrDisplay";
import LinkInput from "./components/LinkInput/LinkInput";
import Navigation from "./components/Navigation/Navigation";
import { observer } from "mobx-react-lite";

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
      <LinkInput userStore={userStore} />
      <QrDisplay userStore={userStore} />
    </div>
  );
});

export default App;
