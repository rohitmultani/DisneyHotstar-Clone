import classes from "./BigLayout.module.css";
import { memo } from "react";
const BigLayout = (props) => {
  return <div className={classes.BigContainer}>{props.children}</div>;
};
export default memo(BigLayout);
