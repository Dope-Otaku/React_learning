import { useNavigate } from "react-router-dom";

function Navbar() {
  const nai = useNavigate();
  return (
    <>
      <nav className="navbarStyling">
        <h1>React Learning Curve</h1>
        <button>
          <a
            onClick={() => {
              nai("/play");
            }}
          >
            Login In
          </a>
        </button>
      </nav>
    </>
  );
}

export default Navbar;
