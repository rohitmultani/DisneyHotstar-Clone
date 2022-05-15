import React, { useState, useEffect, Fragment, memo } from "react";

import NavBar from "../../NavBar";
import Slider from "../../Slider/Slider";
import LatestSlider from "../../Slider/LatestSlider";
import Footer from "../../Footer";

const Home = (props) => {
  const [movies, setMovies] = useState([]);
  const [nowMovies, setnowMovies] = useState([]);
  const [topMovies, setTopMovies] = useState([]);
  const [todayMovies, setTodayMovies] = useState([]);
  const [trendMovies, setTrendMovies] = useState([]);
  const [genre, setGenre] = useState([]);
  useEffect(() => {
    fetchMoviesHandler();
  }, []);
  function fetchMoviesHandler() {
    const newLocal =
      "https://api.themoviedb.org/3/movie/upcoming?api_key=8936bfb1497ed6daf448de63b7b6cb7c";
    fetch(newLocal)
      .then((response) => {
        console.log("fetcging");
        return response.json();
      })
      .then((data) => {
        console.log("fetched");
        const transformedMovies = data.results.map((movieData) => {
          return {
            id: movieData.id,
            title: movieData.title,
            image: movieData.poster_path,
            detail: movieData.overview,
            vote: movieData.vote_average,
          };
        });
        setMovies(transformedMovies);
      });

    const Local =
      "https://api.themoviedb.org/3/movie/now_playing?api_key=8936bfb1497ed6daf448de63b7b6cb7c";
    fetch(Local)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const transformedMovies = data.results.map((movieData) => {
          return {
            id: movieData.id,
            title: movieData.title,
            image: movieData.poster_path,
            detail: movieData.overview,
            vote: movieData.vote_average,
          };
        });
        setnowMovies(transformedMovies);
      });

    const Local2 =
      "https://api.themoviedb.org/3/tv/popular?api_key=8936bfb1497ed6daf448de63b7b6cb7c";
    fetch(Local2)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const transformedMovies = data.results.map((movieData) => {
          return {
            id: movieData.id,
            name: movieData.name,
            image: movieData.poster_path,
            detail: movieData.overview,
            vote: movieData.vote_average,
          };
        });
        setTopMovies(transformedMovies);
      });

    const Local3 =
      "https://api.themoviedb.org/3/tv/top_rated?api_key=8936bfb1497ed6daf448de63b7b6cb7c";
    fetch(Local3)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const transformedMovies = data.results.map((movieData) => {
          return {
            id: movieData.id,
            name: movieData.name,
            image: movieData.poster_path,
            detail: movieData.overview,
            vote: movieData.vote_average,
          };
        });
        setTodayMovies(transformedMovies);
      });

    const Local4 =
      "https://api.themoviedb.org/3/tv/on_the_air?api_key=8936bfb1497ed6daf448de63b7b6cb7c";
    fetch(Local4)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const transformedMovies = data.results.map((movieData) => {
          return {
            id: movieData.id,
            name: movieData.name,
            image: movieData.poster_path,
            detail: movieData.overview,
            vote: movieData.vote_average,
          };
        });
        setTrendMovies(transformedMovies);
      });
  }

  return (
    <Fragment>
      <NavBar />
      <Slider movies={movies} />
      <LatestSlider movies={nowMovies} heading={"Playing Now"} />
      <LatestSlider movies={movies} heading={"Upcoming"} />
      <LatestSlider movies={topMovies} heading={"Latest & Trending"} />
      <LatestSlider movies={todayMovies} heading={"Top Rated"} />
      <LatestSlider movies={trendMovies} heading={"On Air today"} />
      <Footer />
    </Fragment>
  );
};
export default memo(Home);
