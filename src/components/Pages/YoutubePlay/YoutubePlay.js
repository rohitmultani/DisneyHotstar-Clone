import BigLayout from "../../Layout/BigLayout";
import classes from "./YoutubePlay.module.css";
import { memo } from "react";
const YoutubePlay = (props) => {
  return (
    <BigLayout>
      <div>
        <iframe
          className={classes.frame}
          src={`https://www.youtube.com/embed/${props.vdId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </div>
    </BigLayout>
  );
};
export default memo(YoutubePlay);
