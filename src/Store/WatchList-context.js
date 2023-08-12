import React from "react";
const WatchListContext = React.createContext({
  movies: [],
  addMovies: (movies) => {},
  removeMovies: (id) => {},
});
export default WatchListContext;
