import React, { useState, useEffect } from "react";
import classes from "./NavBar.module.css";
import menu from "../Images/menu.svg";
import login from "../Images/login.png";
import search from "../Images/search.svg";
import disney from "../Images/Disney (2).svg";
import List from "../listItems/List";
import HiddenMenu from "./HiddenComponents/HiddenMenu";
import HiddenProfile from "./HiddenComponents/HiddenProfile";
import HiddenLogin from "./HiddenComponents/HiddenLogin";
const NavBar = () => {
  const [focus, setFocus] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const focusHandler = () => {
    setFocus(true);
  };
  return (
    <nav className={classes.NavBar}>
      <ul className={classes.sectionFirstList}>
        <li className={classes.menuBar}>
          <img src={menu} alt="menu" className={classes.menu} />
          <HiddenMenu />
        </li>
        <img src={disney} alt="menu" className={classes.menuLogo} />
        <List />
      </ul>
      <ul className={classes.sectionSecondList}>
        <li>
          <form>
            <input
              type="search"
              placeholder="Search"
              className={classes.search}
            />
            <img src={search} alt="search" className={classes.searchIcon}></img>
          </form>
        </li>
        <li className={classes.profile}>
          <img src={login} alt="menu" className={classes.menu} />
          {loggedIn ? (
            <HiddenProfile />
          ) : (
            <HiddenLogin/>
          )}
        </li>
      </ul>
    </nav>
  );
};
export default NavBar;
