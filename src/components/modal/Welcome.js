import classes from "./LoginModal.module.css";
import {Fragment} from 'react'

const Welcome=(props)=>{
    return(
        <Fragment>
            
        <div className={classes.welcome}>
            Welcome
        </div>
        <div className={classes.phone}>{props.phoneNum}</div>
        <div className={classes.phone}>{props.profile}</div>
        </Fragment>
    );
}
export default Welcome;
