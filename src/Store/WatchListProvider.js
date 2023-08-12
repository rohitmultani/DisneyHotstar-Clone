import WatchListContext from "./WatchList-context";
import { useReducer } from "react";
const defaultWatchState = {
  movies: [],
};
const WatchReducer = (state, action) => {
  if (action.type === "ADD") {
    const existingMovieIndex = state.movies.findIndex(
      (movie) => movie.id === action.movies.id
    );

    let updatedMovies;
    if (state.movies[existingMovieIndex]) {
      //  const updatedMovie = [...existingMovie]
      updatedMovies = [...state.movies];
      // updatedMovies[existingMovieIndex]=updatedMovie;
    } else {
      updatedMovies = state.movies.concat(action.movies);
    }
    return {
      movies: updatedMovies,
    };
  }
  if (action.type === "REMOVE") {
    // const existingMovieIndex = state.items.findIndex((item)=>(
    //   item.id===action.id
    // )
    // const existingMovie=state.movies[existingMovieIndex];
    const updatedMovies = state.movies.filter(
      (movie) => movie.id !== action.id
    );
    return {
      movies: updatedMovies,
    };
  }
  return defaultWatchState;
};
const WatchListProvider = (props) => {
  const [WatchState, dispatchWatchAction] = useReducer(
    WatchReducer,
    defaultWatchState
  );
  const movieAddHandler = (movies) => {
    dispatchWatchAction({ type: "ADD", movies: movies });
  };
  const movieRemoveHandler = (id) => {
    dispatchWatchAction({ type: "REMOVE", id: id });
  };

  const watchListContext = {
    movies: WatchState.movies,
    addMovies: movieAddHandler,
    removeMovies: movieRemoveHandler,
  };
  return (
    <WatchListContext.Provider value={watchListContext}>
      {props.children}
    </WatchListContext.Provider>
  );
};
export default WatchListProvider;
