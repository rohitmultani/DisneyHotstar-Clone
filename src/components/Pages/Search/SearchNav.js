import classes from "./Search.module.css";
import disney from "../../../Images/Disney (2).svg";
import { memo } from "react";
import { Link } from "react-router-dom";
const SearchNav = (props) => {
  const displayHandler = (e) => {
    props.search(e.target.value);
  };
  return (
    <nav className={classes.NavBar}>
      <div className={classes.home}>
        <Link to="/">
          <img src={disney} alt="menu" className={classes.menuLogo} />
        </Link>
      </div>
      <div className={classes.searchHandle}>
        <input
          type="search"
          placeholder="Search"
          className={classes.search}
          onChange={displayHandler}
        />
      </div>
    </nav>
  );
};
export default memo(SearchNav);
