import PlayListContext from "./PlayList-context";
import { useReducer } from "react";
const defaultplayState = {
  movies: [],
};
const playReducer = (state, action) => {
  if (action.type === "ADD") {
    // const existingMovieIndex = state.movies.findIndex((movie)=>(
    //   movie.id===action.movies.id
    // ))

    let updatedMovies;
    if (state.movies.length > 0) {
      // console.log(state.movies.length)
      //  const updatedMovie = [...existingMovie]
      state.movies.pop();
      updatedMovies = state.movies.concat(action.movies);
      // updatedMovies[existingMovieIndex]=updatedMovie;
    } else {
      // console.log("not existed")
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

    // console.log(action.id)
    // console.log("ehllo")
    return {
      movies: updatedMovies,
    };
  }
  return defaultplayState;
};
const PlayListProvider = (props) => {
  const [playState, dispatchplayAction] = useReducer(
    playReducer,
    defaultplayState
  );
  const movieAddHandler = (movies) => {
    dispatchplayAction({ type: "ADD", movies: movies });
  };
  const movieRemoveHandler = (id) => {
    dispatchplayAction({ type: "REMOVE", id: id });
  };

  const playListContext = {
    movies: playState.movies,
    addMovies: movieAddHandler,
    removeMovies: movieRemoveHandler,
  };
  return (
    <PlayListContext.Provider value={playListContext}>
      {props.children}
    </PlayListContext.Provider>
  );
};
export default PlayListProvider;
