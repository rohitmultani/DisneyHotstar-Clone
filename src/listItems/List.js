import classes from './List.module.css';
const List=()=>{
    return(<ul className={classes.list}>      
        <li className={classes.tv}>TV
        <ul className={classes.hiddenTv}>
            <li>Other Shows</li>
            <li>Hotstar Specials</li>
            <li>Quix</li>
            <li>Star Jhalsa</li>
            <li>Star Plus</li>
            <li>Star Vijay</li>
            <li>Star Bharat</li>
            <li>Asianet</li>
            <li>more...</li>
        </ul>
        </li>
        

        <li className={classes.movies}>Movies
        <ul className={classes.hiddenMovies }>
            <li>Hindi</li>
            <li>English</li>
            <li>Bengali</li>
            <li>Telugu</li>
            <li>Malayalam</li>
            <li>Tamil</li>
            <li>Marathi</li>
            <li>Kannada</li>
        </ul>
        </li>
        <li className={classes.sports}>Sports
        <ul className={classes.hiddenSports }>
            <li>Cricket</li>
            <li>Kabaddi</li>
            <li>Football</li>
            <li>Hockey</li>
            <li>Formlua E</li>
            <li>Tennis</li>
            <li>Golf</li>
            <li>Wrestling</li>
            <li>Table Tennis</li>
        </ul>
        </li>
        <li>Disney+</li>
        <li>Kids</li>
    </ul>)
};
export default List;