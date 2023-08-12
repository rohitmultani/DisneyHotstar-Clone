import { useState, memo } from "react";
import classes from "./Design3.module.css";
import BigLayout from "../Layout/BigLayout";
import YoutubePlay from "../Pages/YoutubePlay/YoutubePlay";
const Design3 = (props) => {
  const [movieId, setMovieId] = useState();
  const [play, setPlay] = useState(false);
  const imAddress = `http://image.tmdb.org/t/p/w500/${props.image}`;
  const trailerHandler = () => {
    let Local;
    if (props.title) {
      Local = `https://api.themoviedb.org/3/movie/${props.id}/videos?api_key=8936bfb1497ed6daf448de63b7b6cb7c`;
    } else if (props.name) {
      Local = `https://api.themoviedb.org/3/tv/${props.id}/videos?api_key=8936bfb1497ed6daf448de63b7b6cb7c`;
    }

    fetch(Local)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPlay(true);
        const transformedVideo = data.results.map((movieData) => {
          return {
            key: movieData.key,
          };
        });

        setMovieId(transformedVideo[0].key);
      });
  };

  return (
    <BigLayout>
      <div className={classes.SingleBox}>
        <img src={imAddress} className={classes.im} alt="not available" />
        <button className={classes.watchBtn} onClick={trailerHandler}>
          Watch Trailer
        </button>
        {play && <YoutubePlay vdId={movieId} />}
      </div>
    </BigLayout>
  );
};
export default memo(Design3);
