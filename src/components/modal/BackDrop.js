import classes from "./BackDrop.module.css";
import { memo } from "react";
const BackDrop = (props) => {
  return (
    <div
      className={classes.backdrop}
      onClick={() => {
        props.backdropOpen(false);
      }}
    ></div>
  );
};
export default memo(BackDrop);
