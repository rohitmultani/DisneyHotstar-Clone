import React, { useState, useEffect, memo, useCallback } from "react";
import { Fragment } from "react";
import classes from "../Search/Search.module.css";
import { Link, useParams } from "react-router-dom";

import LatestLayer from "../../Slider/LatestLayer";
import NavBar from "../../NavBar";
const Movie = (props) => {
  const params = useParams();
  const [movies, setMovies] = useState([]);

  const fetchMoviesHandler = useCallback(() => {
    console.log(params.any);
    const newLocal = `https://api.themoviedb.org/3/movie/${params.any}?api_key=8936bfb1497ed6daf448de63b7b6cb7c`;
    fetch(newLocal)
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        const transformedMovies = data.results.map((movieData) => {
          console.log(movieData);

          return {
            id: movieData.id,
            title: movieData.title,
            image: movieData.poster_path,
            detail: movieData.overview,
            vote: movieData.vote_average,
            gid: movieData.genre_ids[0],
            type: "movie",
          };
        });
        setMovies(transformedMovies);
      });
  }, [params.any]);
  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);
  return (
    <Fragment>
      <NavBar />
      <div className={classes.Latest}>{params.any}</div>
      <div className={classes.movieItem}>
        {movies.map((movie) => (
          <div key={movie.id} className={classes.movieItem}>
            <Link to={`/Play/${movie.id}`} className={classes.link}>
              <LatestLayer
                id={movie.id}
                gName={movie.vote}
                name={movie.name}
                title={movie.title}
                image={movie.image}
                detail={movie.detail}
                gid={movie.gid}
                type={movie.type}
              />
            </Link>
          </div>
        ))}
      </div>
    </Fragment>
  );
};
export default memo(Movie);
