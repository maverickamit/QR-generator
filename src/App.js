import "./App.css";
var QRCode = require("qrcode.react");

function App() {
  return (
    <div className="App">
      <QRCode value="http://facebook.github.io/react/" />
    </div>
  );
}
export default App;
