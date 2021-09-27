import { observer } from "mobx-react-lite"; // Or "mobx-react".
import { Link } from "@reach/router";

const TopMenuBar = observer(({ userStore }) => {
  return (
    <div className="col-12">
      <ul className="nav nav-pills nav-fill" role="tablist">
        <li className="nav-item">
          <Link className="btn btn-outline-primary m-2" to="link">
            Link
          </Link>
        </li>
        <li className="nav-item">
          <Link className="btn btn-outline-primary m-2" to="text">
            Text
          </Link>
        </li>
        <li className="nav-item">
          <Link className="btn btn-outline-primary m-2" to="email">
            E-mail
          </Link>
        </li>
        <li className="nav-item">
          <Link className="btn btn-outline-primary m-2" to="phone">
            Phone
          </Link>
        </li>
        <li className="nav-item">
          <Link className="btn btn-outline-primary m-2" to="wifi">
            WI-FI
          </Link>
        </li>
        <li className="nav-item">
          <Link className="btn btn-outline-primary m-2" to="paypal">
            PayPal
          </Link>
        </li>
      </ul>
    </div>
  );
});

export default TopMenuBar;
