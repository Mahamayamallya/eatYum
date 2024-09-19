import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <div className="res-header">
      <img src={LOGO_URL} alt="logo" />
      <ul className="nav-items">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="./about">About</Link>
        </li>
        <li>
          <Link to="./cart">Cart</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
