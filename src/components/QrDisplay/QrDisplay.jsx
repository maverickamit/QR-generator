import { observer } from "mobx-react-lite"; // Or "mobx-react".
import QRCode from "qrcode.react";
import { svgAsPngUri, svgAsDataUri } from "save-svg-as-png";
const QrDisplay = observer(({ userStore }) => {
  const generateDownloadFromDataURL = (url, extension) => {
    let downloadLink = document.createElement("a");
    downloadLink.href = url;
    downloadLink.download = "qrCode." + extension;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  const downloadQRAsPNG = async () => {
    const canvas = document.getElementById("qrCode");
    const options = {
      scale: 10,
    };
    const pngUrl = await svgAsPngUri(canvas, options);
    generateDownloadFromDataURL(pngUrl, "png");
  };

  const downloadQRAsSVG = async () => {
    const canvas = document.getElementById("qrCode");
    const options = {
      scale: 10,
    };
    const svgUrl = await svgAsDataUri(canvas, options);
    generateDownloadFromDataURL(svgUrl, "svg");
  };

  return (
    <div>
      <div className="p-3">
        <QRCode
          id="qrCode"
          value={userStore.qrData}
          renderAs="svg"
          size="200"
          includeMargin={true}
        />
      </div>
      <h5>Download QR </h5>
      <a className="m-2" href="# " onClick={downloadQRAsPNG}>
        PNG
      </a>
      <a className="m-2" href="# " onClick={downloadQRAsSVG}>
        SVG
      </a>
    </div>
  );
});

export default QrDisplay;
