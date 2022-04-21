import classes from '../LayoutDesigned/Design2.module.css';
import { useContext } from 'react';
import WatchListContext from '../../Store/WatchList-context';
const HiddenAbout=(props)=>{
    const WatchCtx=useContext(WatchListContext);
    const removeHandler=()=>{
        WatchCtx.removeMovies({
            id:props.id
        })
    }
    return(
        <div className={classes.detailss}>
            <div className={classes.Title}>{props.title}</div>
            <div className={classes.Explane}>A grim, gritty, and gripping super-noir, The Batman ranks among the Dark Knight's bleakest -- and most thrillingly ambitious -- live-action outings.</div>
            <div className={classes.watchlist}  onClick={removeHandler}>REMOVE FROM WATCHLIST</div>
        </div>
    );

}
export default HiddenAbout;