import "./Navbar.css";
import logo from "/prof.png";
import Netflixlogo from "/n-sma.webp";
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
          <Link className="navLink" to="/">
            Home
          </Link>
          <Link className="navLink" to="/Shows">
            Shows
          </Link>
          <Link className="navLink" to="/Movies">
            Movies
          </Link>
          <Link className="navLink" to="/MyNetflix">
            My Netflix
          </Link>
        </div>
        <div className="rightBox">
          <img className="ImgLo" src={Netflixlogo} />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
