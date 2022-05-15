import classes from '../LayoutDesigned/Design2.module.css';
import { useContext,memo } from 'react';
import {Link} from 'react-router-dom'
import WatchListContext from '../../Store/WatchList-context';
const HiddenAbout=(props)=>{
    const WatchCtx=useContext(WatchListContext);
    const removeHandler=()=>{
        console.log(props)
        WatchCtx.removeMovies(
            props.id
        )
    }
    return(
        <div className={classes.detailss}>
            <div className={classes.Title}>{props.title} {props.name}</div>
            <div className={classes.Explane}>{props.detail}</div>
          <Link to="/WatchList">  <div className={classes.watchlist}  onClick={removeHandler}>REMOVE FROM WATCHLIST</div></Link>
        </div>
    );

}
export default memo(HiddenAbout);