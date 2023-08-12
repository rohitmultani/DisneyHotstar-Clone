import LandScape from "../Layout/LandScape";
import classes from "./Design2.module.css";
import { useContext, memo } from "react";
import PlayListContext from "../../Store/PlayList-context";
import HiddenAbout from "../HiddenComponents/HiddenAbout";
const Design2 = (props) => {
  const PlayCtx = useContext(PlayListContext);
  const addHandler = () => {
    PlayCtx.addMovies({
      id: props.id,
      title: props.title,
      name: props.name,
      image: props.image,
      detail: props.detail,
    });
  };
  const imAddress = `http://image.tmdb.org/t/p/w500/${props.image}`;
  return (
    <LandScape>
      <div className={classes.SingleBox} onClick={addHandler}>
        <img src={imAddress} className={classes.im} alt="alt img" />
        <div className={classes.hiddenInfo}>
          <HiddenAbout
            title={props.title}
            id={props.id}
            detail={props.detail}
            name={props.name}
          />
        </div>
      </div>
    </LandScape>
  );
};
export default memo(Design2);
