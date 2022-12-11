/* eslint-disable jsx-a11y/anchor-is-valid */
import burgerLogo from "../../assets/burgerLogo.svg";
import "./header.css";
const Header = () => {
  return (
    <div className="header">
      <img src={burgerLogo} className="burger__logo" alt="Logo" />
      <h1 className="title"> Stolovnya by Lev</h1>
      <div className="nav">
        <nav>
          <a href="#">Home</a>
        </nav>
        <nav>
          <a href="#">Orders</a>
        </nav>
        <nav>
          <a href="#">FAQ</a>
          
        </nav>
      </div>
    </div>
  );
};

export default Header;
