import "./App.css";
import QrDisplay from "./components/QrDisplay/QrDisplay";
import LinkInput from "./components/LinkInput/LinkInput";
import { observer } from "mobx-react-lite";

const App = observer(({ userStore }) => {
  return (
    <div className="App">
      <LinkInput userStore={userStore} />
      <QrDisplay userStore={userStore} />
    </div>
  );
});

export default App;
