import classes from "../LayoutDesigned/Design2.module.css";
import { useContext, memo } from "react";
import WatchListContext from "../../Store/WatchList-context";
const HiddenAbout = (props) => {
  const WatchCtx = useContext(WatchListContext);
  const removeHandler = (e) => {
    e.preventDefault();
    WatchCtx.removeMovies(props.id);
  };
  return (
    <div className={classes.detailss}>
      <div className={classes.Title}>
        {props.title} {props.name}
      </div>
      <div className={classes.Explane}>{props.detail}</div>
      <div className={classes.watchlist} onClick={removeHandler}>
        REMOVE{" "}
      </div>
    </div>
  );
};
export default memo(HiddenAbout);
