import LandScape from '../Layout/LandScape';
import classes from './Design1.module.css';
import batMan from '../../Images/batman.webp'
const Design1 =()=>{
    return(
        <LandScape>
            <img src={batMan} className={classes.im}></img>
        </LandScape>
    );

}
export default Design1;