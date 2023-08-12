import classes from "./SliderLayout.module.css";
import { memo } from "react";
const SliderLayout = (props) => {
  return <div className={classes.SliderLayout}>{props.children}</div>;
};
export default memo(SliderLayout);
