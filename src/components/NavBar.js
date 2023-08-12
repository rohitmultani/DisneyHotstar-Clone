import React, { useState, memo } from "react";
import classes from "./NavBar.module.css";
import menu from "../Images/menu.svg";
import login from "../Images/login.png";
import search from "../Images/search.svg";
import disney from "../Images/Disney (2).svg";
import List from "../listItems/List";
import HiddenMenu from "./HiddenComponents/HiddenMenu";
import HiddenProfile from "./HiddenComponents/HiddenProfile";
import Login from "./Login/Login";
import { auth } from "../Firebase";
import { Link } from "react-router-dom";
import LoginModal from "./modal/LoginModal";
import BackDrop from "./modal/BackDrop";
const NavBar = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [modal, setModal] = useState(false);
  auth.onAuthStateChanged((user) => {
    if (user) {
      return setLoggedIn(true);
    }
    setLoggedIn(false);
  });
  const modalHandler = () => {
    setModal((prevState) => !prevState);
  };
  const logoutHandler = (props) => {
    setLoggedIn(props);
  };

  return (
    <nav className={classes.NavBar}>
      <ul className={classes.sectionFirstList}>
        <li className={classes.menuBar}>
          <img src={menu} alt="menu" className={classes.menu} />
          <HiddenMenu />
        </li>
        <Link to="/">
          <img src={disney} alt="menu" className={classes.menuLogo} />
        </Link>
        <List />
      </ul>
      <ul className={classes.sectionSecondList}>
        <li>
          <form>
            <Link to="/search">
              <input
                type="search"
                placeholder="Search"
                className={classes.search}
              />
              <img src={search} alt="search" className={classes.searchIcon} />
            </Link>
          </form>
        </li>
        {loggedIn ? (
          <li className={classes.profile}>
            {" "}
            <img src={login} alt="menu" className={classes.menu} />
            <HiddenProfile logoutHandler={logoutHandler} />
          </li>
        ) : (
          <Login modal={modalHandler} />
        )}
        {modal && <LoginModal modalOpen={modalHandler} />}
        {modal && <BackDrop backdropOpen={modalHandler} />}
      </ul>
    </nav>
  );
};
export default memo(NavBar);
