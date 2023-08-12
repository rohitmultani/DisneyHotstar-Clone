import SmallLayout from "../Layout/SmallLayout";
import classes from "./LatestLayer.module.css";
import found from "../../Images/found.jpg";
import { useContext, memo } from "react";
import HiddenDetails from "../HiddenComponents/HiddenDetails";
import PlayListContext from "../../Store/PlayList-context";
const LatestLayer = (props) => {
  const PlayCtx = useContext(PlayListContext);
  const addHandler = (event) => {
    PlayCtx.addMovies({
      id: props.id,
      title: props.title,
      name: props.name,
      image: props.image,
      detail: props.detail,
      gname: props.gName,
    });
    // console.log(PlayCtx);
  };
  let imAddress;
  if (props.image) {
    imAddress = `http://image.tmdb.org/t/p/w500/${props.image}`;
  } else {
    imAddress = found;
  }
  return (
    <SmallLayout>
      <div className={classes.SingleBox} onClick={addHandler}>
        <img src={imAddress} className={classes.batImg} alt="not available" />
        <div className={classes.hiddenInfo}>
          <HiddenDetails
            gName={props.gName}
            id={props.id}
            name={props.name}
            title={props.title}
            detail={props.detail}
            image={props.image}
            gid={props.gid}
            type={props.type}
          />
        </div>
      </div>
    </SmallLayout>
  );
};
export default memo(LatestLayer);
