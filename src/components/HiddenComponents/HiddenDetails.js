import classes from '../Slider/LatestLayer.module.css'
import { useRef } from 'react';
import {useContext} from 'react';
import WatchListContext from '../../Store/WatchList-context';

const HiddenDetails=(props)=>{
    const WatchCtx=useContext(WatchListContext);
    const titleRef=useRef();
    const GenreRef=useRef();
    const ExplaneRef=useRef();

    const addHandler=(event)=>{

        WatchCtx.addMovies({
            // title:titleRef.current.value,
            // Genre:GenreRef.current.value,
            // Explane:ExplaneRef.current.value,
            // amt:12   
            id:props.id,
            title:"batman"
        })
        //   console.log(WatchCtx.movies.map((movies)=>{console.log("2")}))
    }   
    return(
        <div className={classes.detailss}>
            <div className={classes.Title} ref={titleRef}>{props.title}</div>
            <div className={classes.Genre}  ref={GenreRef}>Action</div>
            <div className={classes.Explane}  ref={ExplaneRef}>{props.detail}</div>
            <div className={classes.watchlist} onClick={addHandler}>+ ADD TO WATCHLIST</div>
        </div>
    );

}
export default HiddenDetails;