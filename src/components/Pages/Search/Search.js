import React, { useState, useEffect, memo, useCallback } from "react";
import { Fragment } from "react";
import classes from "./Search.module.css";
import SearchNav from "./SearchNav";
import { Link } from "react-router-dom";
import sadFace from "../../../Images/sad.svg";
import LatestLayer from "../../Slider/LatestLayer";
const Search = (props) => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [loaded, setLoaded] = useState(true);
  const queryHandler = (e) => {
    setQuery(e);
    console.log(query);
  };
  const fetchMoviesHandler = useCallback(() => {
    const newLocal = `https://api.themoviedb.org/3/search/movie?api_key=8936bfb1497ed6daf448de63b7b6cb7c&query=${query}&page=1`;
    fetch(newLocal)
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        if (data.total_pages === 0) {
          setLoaded(false);
        } else setLoaded(true);
        const transformedMovies = data.results.map((movieData) => {
          return {
            id: movieData.id,
            title: movieData.title,
            image: movieData.poster_path,
            detail: movieData.overview,
            gid: movieData.genre_ids[0],
            type: "movie",
          };
        });
        setMovies(transformedMovies);
      });
  }, [query]);
  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);
  return (
    <Fragment>
      <SearchNav search={queryHandler} />
      <div className={classes.movieItem}>
        {loaded ? (
          movies.map((movie) => (
            <div key={movie.id} className={classes.movieItem}>
              <Link to={`/Play/${movie.id}`} className={classes.link}>
                <LatestLayer
                  id={movie.id}
                  //  key={movie.id}
                  name={movie.name}
                  title={movie.title}
                  image={movie.image}
                  detail={movie.detail}
                  gid={movie.gid}
                  type={movie.type}
                />
              </Link>
            </div>
          ))
        ) : (
          <div className={classes.found}>
            Not Found
            <img src={sadFace} alt="sad face" />
          </div>
        )}
      </div>
    </Fragment>
  );
};
export default memo(Search);
