import LandScape from "../Layout/LandScape";
import classes from "./Design1.module.css";
import { memo } from "react";
const Design1 = (props) => {
  const imAddress = `http://image.tmdb.org/t/p/w500/${props.image}`;
  return (
    <LandScape>
      <img src={imAddress} className={classes.im} alt="not available" />
    </LandScape>
  );
};
export default memo(Design1);
