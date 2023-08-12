import classes from "../NavBar.module.css";
import { Link } from "react-router-dom";
import { auth } from "../../Firebase";
import { memo } from "react";
const HiddenProfile = (props) => {
  const logout = () => {
    auth.signOut();
    props.logoutHandler(false);
  };
  return (
    <ul className={classes.hiddenProfile}>
      <li>
        <Link to="/WatchList" className={classes.Link}>
          WatchList
        </Link>
      </li>
      <Link to="/profile" className={classes.Link}>
        <li>My Account</li>
      </Link>
      <li onClick={logout}>Logout</li>
    </ul>
  );
};
export default memo(HiddenProfile);
