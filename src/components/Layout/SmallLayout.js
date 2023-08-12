import classes from "./SmallLayout.module.css";
import { memo } from "react";
const SmallLayout = (props) => {
  return <div className={classes.smallLayout}>{props.children}</div>;
};
export default memo(SmallLayout);
