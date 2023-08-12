import classes from "../NavBar.module.css";
import { memo } from "react";
import { Link } from "react-router-dom";
import channel from "../../Images/channel.svg";
const HiddenMenu = () => {
  return (
    <ul className={classes.hiddenMenu}>
      <Link to="/channel" className={classes.Link}>
        {" "}
        <li>
          {" "}
          <img src={channel} alt="channel" />
          Channels
        </li>
      </Link>
    </ul>
  );
};
export default memo(HiddenMenu);
