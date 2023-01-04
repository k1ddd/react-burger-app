/* eslint-disable jsx-a11y/anchor-is-valid */
import { NavLink, Outlet } from 'react-router-dom';
import burgerLogo from '../../assets/burgerLogo.svg';
import './header.css';
const Header = () => {
  return (
    <>
      <div className="header">
        <img src={burgerLogo} className="burger__logo" alt="Logo" />
        <h1 className="title"> Stolovnya by Lev</h1>
        <div className="nav">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/orders">Orders</NavLink>
          <NavLink to="/contacts">Contacts</NavLink>
          <NavLink to="/faq">FAQ</NavLink>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Header;
