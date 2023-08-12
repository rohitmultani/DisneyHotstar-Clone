import Navbar from "../../NavBar";
import classes from "./WatchList.module.css";
import { Fragment, memo } from "react";
import Design2 from "../../LayoutDesigned/Design2";
import { useContext } from "react";
import { Link } from "react-router-dom";
import WatchListContext from "../../../Store/WatchList-context";

const WatchList = (props) => {
  const WatchCtx = useContext(WatchListContext);
  console.log(WatchCtx.movies);
  const movieAddHandler = (movies) => {};
  const movieRemoveHandler = (id) => {
    WatchCtx.removeMovies(id);
  };

  const WatchItems = (
    <ul className={classes.containerList}>
      {WatchCtx.movies.map((item) => (
        <Link to={`/Play/${item.id}`} className={classes.link}>
          <Design2
            id={item.id}
            key={item.id}
            name={item.name}
            detail={item.detail}
            title={item.title}
            image={item.image}
            vote={item.gName}
            onRemove={movieRemoveHandler.bind(null, item.id)}
            onAdd={movieAddHandler.bind(null, item)}
          />
        </Link>
      ))}
      {WatchCtx.movies.length === 0 ? (
        <div className={classes.empty}>Nothing here to display</div>
      ) : (
        <></>
      )}
    </ul>
  );

  return (
    <Fragment>
      <Navbar />
      <div className={classes.pageName}>WatchList</div>
      {WatchItems}
    </Fragment>
  );
};
export default memo(WatchList);
