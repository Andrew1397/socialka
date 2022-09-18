import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css"

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to="/profile" className={navData}>Profile</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/dialogs" className={navData}>Messages</NavLink>
      </div>
      <div className={s.item}>
        <a>News</a>
      </div>
      <div className={s.item}>
        <a>Music</a>
      </div>
      <div className={s.item}>
        <a>Settings</a>
      </div>
    </nav>
  );

  function navData(navData) {
    // console.log("navData", navData);
    return navData.isActive ? s.activeLink : s.item
  }
}

export default Navbar;