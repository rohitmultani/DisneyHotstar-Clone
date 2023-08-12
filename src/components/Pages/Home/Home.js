import React, { useState, useEffect, Fragment, memo, useContext } from "react";
import { auth } from "../../../Firebase";
import NavBar from "../../NavBar";
import Slider from "../../Slider/Slider";
import LatestSlider from "../../Slider/LatestSlider";
import Footer from "../../Footer";
import WatchListContext from "../../../Store/WatchList-context";

const Home = (props) => {
  const [movies, setMovies] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [nowMovies, setnowMovies] = useState([]);
  const [topMovies, setTopMovies] = useState([]);
  const [todayMovies, setTodayMovies] = useState([]);
  const [trendMovies, setTrendMovies] = useState([]);
  const [recommendMovies, setRecommendMovies] = useState([]);
  const [recommendTv, setRecommendTv] = useState([]);

  const WatchCtx = useContext(WatchListContext);
  useEffect(() => {
    fetchMoviesHandler();
  }, []);

  auth.onAuthStateChanged((user) => {
    if (user) {
      return setLoggedIn(true);
    }
    setLoggedIn(false);
  });

  const movieGenre = WatchCtx.movies[WatchCtx.movies.length - 1];

 
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
            gid: movieData.genre_ids[0],
            type: "movie",
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
            gid: movieData.genre_ids[0],
            type: "movie",
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
            gid: movieData.genre_ids[0],
            type: "tv",
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
            gid: movieData.genre_ids[0],
            type: "tv",
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
            gid: movieData.genre_ids[0],
            type: "tv",
          };
        });
        setTrendMovies(transformedMovies);
      });
  }

  useEffect(() => {
    function recommendMoviesHandler() {
      if (movieGenre) {
        console.log(movieGenre.movieGenre);
        const Local5 = `https://api.themoviedb.org/3/discover/movie?api_key=8936bfb1497ed6daf448de63b7b6cb7c&with_genres=${movieGenre.movieGenre}`;
        fetch(Local5)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            const transformedMovies = data.results.map((movieData) => {
              return {
                id: movieData.id,
                name: movieData.title,
                image: movieData.poster_path,
                detail: movieData.overview,
                vote: movieData.vote_average,
                gid: movieData.genre_ids[0],
                type: "movie",
              };
            });
            setRecommendMovies(transformedMovies);
          });
      }
  
      if (movieGenre) {
        const Local6 = `https://api.themoviedb.org/3/discover/tv?api_key=8936bfb1497ed6daf448de63b7b6cb7c&with_genres=${movieGenre.tvGenre}`;
        fetch(Local6)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            const transformedMovies = data.results.map((movieData) => {
              return {
                id: movieData.id,
                name: movieData.title ? movieData.title : movieData.name,
                image: movieData.poster_path,
                detail: movieData.overview,
                vote: movieData.vote_average,
                gid: movieData.genre_ids[0],
                type: "tv",
              };
            });
            setRecommendTv(transformedMovies);
          });
      }
    }
    recommendMoviesHandler();
  }, [movieGenre]);

  

  return (
    <Fragment>
      <NavBar />
      <Slider movies={movies} />
      <LatestSlider movies={nowMovies} heading={"Playing Now"} />
      <LatestSlider movies={movies} heading={"Upcoming"} />
      <LatestSlider movies={topMovies} heading={"Latest & Trending"} />
      <LatestSlider movies={todayMovies} heading={"Top Rated"} />
      <LatestSlider movies={trendMovies} heading={"On Air today"} />
      {loggedIn && WatchCtx.movies.length !== 0 && recommendMovies && (
        <LatestSlider movies={recommendMovies} heading={"Recommended Movies"} />
      )}
      {loggedIn && WatchCtx.movies.length !== 0 && recommendTv && (
        <LatestSlider movies={recommendTv} heading={"Recommended TV Shows"} />
      )}
      <Footer />
    </Fragment>
  );
};
export default memo(Home);
