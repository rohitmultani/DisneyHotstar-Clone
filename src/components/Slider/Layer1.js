import SliderLayout from "../Layout/SliderLayout";
import classes from "./Layer1.module.css";
import PlayListContext from "../../Store/PlayList-context";
import { useContext,memo} from "react";
const Layer1 = (props) => {
  const PlayCtx = useContext(PlayListContext);
  const addHandler = (event) => {
    PlayCtx.addMovies({
      id: props.id,
      title: props.title,
      name: props.name,
      image: props.image,
      detail: props.detail,
      vote:props.vote
    });
  };
  const imAddress = `http://image.tmdb.org/t/p/w500/${props.image}`;
  return (
    <SliderLayout>
      <div className={classes.layout} onClick={addHandler}>
        <div className={classes.titleHead}>
          <div className={classes.title}>{props.title}</div>
          <div className={classes.genre}>{props.vote}</div>
          <div className={classes.description}>{props.detail}</div>
        </div>

        <img src={imAddress} className={classes.img} alt="not available"/>
      </div>
    </SliderLayout>
  );
};
export default memo(Layer1);
