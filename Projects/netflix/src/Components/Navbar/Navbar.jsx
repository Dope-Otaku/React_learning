import "./Navbar.css";
import logo from "/prof.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="leftBox">
          <div className="profile">
            <img className="profile-img" src={logo} alt="profile img" />
          </div>
        </div>
        <div className="midBox">
          <Link to="/">Home</Link>
          <Link to="/Shows">Shows</Link>
          <Link to="/Movies">Movies</Link>
          <Link to="/MyNetflix">My Netflix</Link>
        </div>
        <div className="rightBox">Right box</div>
      </nav>
    </>
  );
};

export default Navbar;
