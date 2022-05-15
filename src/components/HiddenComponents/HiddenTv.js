import classes from '../../listItems/List.module.css';
import {Link} from 'react-router-dom';
import { memo } from "react";
const Tv = [
    {firstname : "Top Rated", lastname: "top_rated"},
    {firstname : "Popular", lastname: "popular"},
    {firstname : "On Air", lastname: "on_the_air"},
    {firstname : "Live", lastname: "airing_today"}
  ];
const HiddenTv=()=>{
    return(
    <ul className={classes.hiddenTv}>
            {Tv.map((x)=>
            <Link to={`/tv/${x.lastname}`} className={classes.link}>
            <li>{x.firstname}</li>
            </Link>
            )}
        </ul>
)};
export default memo(HiddenTv);