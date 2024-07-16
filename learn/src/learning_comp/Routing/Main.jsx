import "./Main.css";
import { Link } from "react-router-dom";

const styling = {
  backgroundColor: "rgb(44,30,242)",
  color: "white",
  padding: 10,
  textAlign: "center",
};

const stylingIn = {
  backgroundColor: "rgb(255,255,255)",
  color: "white",
  padding: 30,
  textAlign: "center",
  display: "flex",
  justifyContent: "space-evenly",
  boxShadow: "0 0 10px rgba(0,0,0,0.1)",
};

const Main = () => {
  return (
    <>
      <nav style={styling}>Get ready To complete your daily goals</nav>
      <div className="header" style={stylingIn}>
        {/* this is the traditional way of routing but it falsifies the spa property so that's why we use Link tag from r-r-d */}
        {/* <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a> */}
        {/* this is using Link tag */}
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </>
  );
};

export default Main;
