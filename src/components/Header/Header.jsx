import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css"

const Header = (props) => {
  return (
    <header className={s.header}>
      <img src="https://cdn.pixabay.com/photo/2017/03/19/20/19/ball-2157465__340.png" alt="logoSite"></img>
      <div className={s.loginBlock}>
        {props.isAuth ? props.login : <NavLink to={'/login'}> Login </NavLink>}
      </div>
    </header>
  );
};

export default Header;
