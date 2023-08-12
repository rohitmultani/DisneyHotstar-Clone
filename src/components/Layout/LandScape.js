import classes from "./LandScape.module.css";
import { memo } from "react";
const LandScape = (props) => {
  return <div className={classes.landScapeContainer}>{props.children}</div>;
};
export default memo(LandScape);
