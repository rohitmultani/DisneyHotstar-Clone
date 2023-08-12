import React from "react";
const PlayListContext = React.createContext({
  movies: [],
  addMovies: (movies) => {},
  removeMovies: (id) => {},
});
export default PlayListContext;
