import "./App.css";
import QrDisplay from "./components/QrDisplay/QrDisplay";
import LinkInput from "./components/LinkInput/LinkInput";
function App() {
  return (
    <div className="App">
      <LinkInput />
      <QrDisplay />
    </div>
  );
}
export default App;
