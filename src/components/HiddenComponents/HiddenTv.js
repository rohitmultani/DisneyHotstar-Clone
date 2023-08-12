import classes from "../../listItems/List.module.css";
import { Link } from "react-router-dom";
import { memo } from "react";
const Tv = [
  { firstname: "Top Rated", lastname: "top_rated", id: "12" },
  { firstname: "Popular", lastname: "popular", id: "23" },
  { firstname: "On Air", lastname: "on_the_air", id: "43" },
  { firstname: "Live", lastname: "airing_today", id: "54" },
];
const HiddenTv = () => {
  return (
    <ul className={classes.hiddenTv}>
      {Tv.map((x) => (
        <Link to={`/tv/${x.lastname}`} className={classes.link}>
          <li key={x.id}>{x.firstname}</li>
        </Link>
      ))}
    </ul>
  );
};
export default memo(HiddenTv);
