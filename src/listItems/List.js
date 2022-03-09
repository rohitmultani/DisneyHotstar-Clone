import HiddenMovies from "../components/HiddenComponents/HiddenMovies";
import HiddenSports from "../components/HiddenComponents/HiddenSports";
import HiddenTv from "../components/HiddenComponents/HiddenTv";
import classes from "./List.module.css";
const List = () => {
  return (
    <ul className={classes.list}>
      <li className={classes.tv}>
        TV
        <HiddenTv />
      </li>

      <li className={classes.movies}>
        Movies
        <HiddenMovies />
      </li>
      <li className={classes.sports}>
        Sports
        <HiddenSports />
      </li>
      <li>Disney+</li>
      <li>Kids</li>
    </ul>
  );
};
export default List;
