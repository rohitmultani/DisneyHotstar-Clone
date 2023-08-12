import classes from "../Slider/LatestLayer.module.css";
import { useRef, memo, useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../Firebase";
import { useContext } from "react";
import WatchListContext from "../../Store/WatchList-context";

const HiddenDetails = (props) => {
  const WatchCtx = useContext(WatchListContext);
  const titleRef = useRef();
  const GenreRef = useRef();
  const ExplaneRef = useRef();
  const [loggedIn, setLoggedIn] = useState(false);

  let tvCache = {};
  let movieCache = {};

  let maxFreqMovie = 0;
  let maxFreqTv = 0;

  auth.onAuthStateChanged((user) => {
    if (user) {
      return setLoggedIn(true);
    }
    setLoggedIn(false);
  });

  const addHandler = (event) => {
    event.preventDefault();

    let elementMovie = 28;
    let elementTv = 18;

    WatchCtx.movies.forEach((mp) => {
      if (mp.type === "movie") {
        if (movieCache[mp.gid]) movieCache[mp.gid]++;
        else movieCache[mp.gid] = 0;
      } else {
        if (tvCache[mp.gid]) tvCache[mp.gid]++;
        else tvCache[mp.gid] = 0;
      }
    });

    for (const cnt in movieCache) {
      if (movieCache[cnt] >= maxFreqMovie) {
        maxFreqMovie = movieCache[cnt];
        elementMovie = cnt;
      }
    }

    for (const cnt in tvCache) {
      if (tvCache[cnt] >= maxFreqTv) {
        maxFreqTv = tvCache[cnt];
        elementTv = cnt;
      }
    }

    if (loggedIn)
      WatchCtx.addMovies({
        id: props.id,
        title: props.title,
        name: props.name,
        image: props.image,
        detail: props.detail,
        gid: props.gid,
        type: props.type,
        movieGenre: elementMovie,
        tvGenre: elementTv,
      });
    else {
      window.alert("Please login to add");
    }
  };
  return (
    <div className={classes.detailss}>
      <div className={classes.Title} ref={titleRef}>
        {props.title} {props.name}
      </div>
      <div className={classes.Genre} ref={GenreRef}>
        Vote Count : {props.gName}
      </div>
      <div className={classes.Explane} ref={ExplaneRef}>
        {props.detail}
      </div>
      <Link to="/WatchList" className={classes.link}>
        {" "}
        <div className={classes.watchlist} onClick={addHandler}>
          Save
        </div>
      </Link>
    </div>
  );
};
export default memo(HiddenDetails);
