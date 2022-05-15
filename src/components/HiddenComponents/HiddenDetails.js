import classes from '../Slider/LatestLayer.module.css'
import { useRef,memo} from 'react';
import {Link} from 'react-router-dom';
import {useContext} from 'react';
import WatchListContext from '../../Store/WatchList-context';

const HiddenDetails=(props)=>{
    const WatchCtx=useContext(WatchListContext);
    const titleRef=useRef();
    const GenreRef=useRef();
    const ExplaneRef=useRef();

    const addHandler=(event)=>{
        WatchCtx.addMovies({  
            id:props.id,
            title:props.title,
            name:props.name,
            image:props.image,
            detail:props.detail
        })
    }   
    return(
        <div className={classes.detailss}>
            <div className={classes.Title} ref={titleRef}>{props.title} {props.name}</div>
            <div className={classes.Genre}  ref={GenreRef}>Vote Count : {props.gName}</div>
            <div className={classes.Explane}  ref={ExplaneRef}>{props.detail}</div>
          <Link to ="/WatchList" className={classes.link}>  <div className={classes.watchlist} onClick={addHandler}>+ ADD TO WATCHLIST</div></Link>
        </div>
    );

}
export default memo(HiddenDetails);