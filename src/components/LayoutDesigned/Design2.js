import LandScape from '../Layout/LandScape';
import classes from './Design2.module.css';
import batMan from '../../Images/batman.webp'
import HiddenAbout from '../HiddenComponents/HiddenAbout';
const Design2 =(props)=>{
    const imAddress=`http://image.tmdb.org/t/p/w500/${props.image}`
    return(
        <LandScape>
              <div className={classes.SingleBox}> 
            <img src={imAddress} className={classes.im}></img>
            <div className={classes.hiddenInfo}>
    <HiddenAbout title={props.title} id={props.id}/>
</div>
</div>
</LandScape>
    );

}
export default Design2;