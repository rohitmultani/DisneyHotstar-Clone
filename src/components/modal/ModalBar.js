import classes from "./ModalBar.module.css";
import { memo } from "react";
const ModalBar = (props) => {
  return <div className={classes.modalBar}>{props.children}</div>;
};
export default memo(ModalBar);
