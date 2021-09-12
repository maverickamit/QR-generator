import React from "react";

import QRCode from "qrcode.react";

function QrDisplay() {
  return (
    <div>
      <QRCode value="http://facebook.github.io/react/" renderAs="svg" />
    </div>
  );
}
export default QrDisplay;
