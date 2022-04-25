import  Navbar  from "../../NavBar"
import classes from './WatchList.module.css'
import { Fragment } from "react";
import Design2 from "../../LayoutDesigned/Design2";
import { useContext } from "react";
import WatchListContext from "../../../Store/WatchList-context";

const WatchList=(props)=>{
    const WatchCtx=useContext(WatchListContext);
    const movieAddHandler = (movies) => {};
    const movieRemoveHandler = (id) => {
        WatchCtx.removeMovies(id);
    };
    // console.log("hello from watchlist")
    // console.log(WatchCtx.movies.map((movies)=>console.log(movies.id))) 
    const WatchItems = (
        <ul className={classes.containerList}>
          {WatchCtx.movies.map((item) => (
            <Design2
                id={item.id }
                key={item.id}
                title={item.title}
                image={item.image}
                onRemove={movieRemoveHandler.bind(null, item.id)}
              onAdd={movieAddHandler.bind(null, item)}
            />
          ))}
        </ul>
      );
    
        return(<Fragment>
        <Navbar/>
        <div className={classes.pageName}>WatchList</div>
      {WatchItems}
      
    </Fragment>);

}
export default WatchList;