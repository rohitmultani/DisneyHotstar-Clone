import Navbar from "../../NavBar";
import classes from "./Channel.module.css";
import { Fragment, useState, useEffect, memo } from "react";
import Design1 from "../../LayoutDesigned/Design1";

const Channel = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetchMoviesHandler();
  }, []);
  function fetchMoviesHandler() {
    const newLocal = `https://api.themoviedb.org/3/watch/providers/movie?api_key=8936bfb1497ed6daf448de63b7b6cb7c`;
    fetch(newLocal)
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        const transformedMovies = data.results.map((movieData) => {
          return {
            id: movieData.provider_id,
            name: movieData.provider_name,
            image: movieData.logo_path,
          };
        });
        setMovies(transformedMovies);
      });
  }
  return (
    <Fragment>
      <Navbar />
      <div className={classes.pageName}>Channels</div>
      <div className={classes.containerList}>
        {movies.map((movie) => (
          <div key={movie.id} className={classes.movieItem}>
            <Design1 id={movie.id} name={movie.name} image={movie.image} />
          </div>
        ))}
      </div>
    </Fragment>
  );
};
export default memo(Channel);
