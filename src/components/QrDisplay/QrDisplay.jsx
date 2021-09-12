import { observer } from "mobx-react-lite"; // Or "mobx-react".
import QRCode from "qrcode.react";

const QrDisplay = observer(({ userStore }) => {
  return (
    <div>
      <QRCode
        className="border border-white"
        value={userStore.linkUrl}
        renderAs="svg"
      />
    </div>
  );
});

export default QrDisplay;
