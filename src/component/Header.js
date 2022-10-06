import logo from "../assets/logo.png";
import "../styles/header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="headerContainer">
      <div className="leftHeader">
        <Link to="/">
          <img className="logoPic" src={logo} alt="" />
        </Link>
      </div>
      <div className="rightHeader">
        <li>
          <button>Accueil</button>
          <button>À propos</button>
          <button>Nos services</button>
          <button>Références</button>
          <button>Contact</button>
        </li>
      </div>
    </div>
  );
};

export default Header;
