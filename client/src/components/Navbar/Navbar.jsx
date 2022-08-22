import { Link } from "react-router-dom";
import "./navbar.scss";
const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav_logo">
        <img src="/video.png" alt="logo" />
      </div>
      <ul className="nav_list">
        <li>
          <Link to="/">Upload</Link>
        </li>
        <li>
          <Link to="/gallary">Gallary</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
