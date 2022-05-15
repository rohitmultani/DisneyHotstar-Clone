import classes from '../../listItems/List.module.css';
import {Link} from 'react-router-dom';
import { memo } from "react";
const Movies = [
    {firstname : "Top Rated", lastname: "top_rated"},
    {firstname : "Popular", lastname: "popular"},
    {firstname : "Upcoming", lastname: "upcoming"},
    {firstname : "Now Playing", lastname: "now_playing"}
  ];
const HiddenMovies=()=>{
    return(
    <ul className={classes.hiddenMovies }>
        {Movies.map((x)=>
            <Link to={`/movie/${x.lastname}`} className={classes.link}>
            <li>{x.firstname}</li>
            </Link>
            )}
        </ul>
)};
export default memo(HiddenMovies);