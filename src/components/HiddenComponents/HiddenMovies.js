import classes from '../../listItems/List.module.css';
import {Link} from 'react-router-dom';
import { memo } from "react";
const Movies = [
    {firstname : "Top Rated", lastname: "top_rated",id:"45"},
    {firstname : "Popular", lastname: "popular",id:"09"},
    {firstname : "Upcoming", lastname: "upcoming",id:"232"},
    {firstname : "Now Playing", lastname: "now_playing",id:"4243"}
  ];
const HiddenMovies=()=>{
    return(
    <ul className={classes.hiddenMovies }>
        {Movies.map((x)=>
            <Link to={`/movie/${x.lastname}`} className={classes.link}>
                <div key={x.id}>
            <li >{x.firstname}</li>
            </div>
            </Link>
            )}
        </ul>
)};
export default memo(HiddenMovies);