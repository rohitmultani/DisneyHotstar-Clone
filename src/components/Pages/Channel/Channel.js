import  Navbar  from "../../NavBar"
import classes from './Channel.module.css'
import { Fragment } from "react";
import Design1 from "../../LayoutDesigned/Design1";

const Channel=()=>{
    return(<Fragment>
        <Navbar/>
        <div className={classes.pageName}>Channels</div>
        <div className={classes.containerList}>
            <Design1/>
            <Design1/>
            <Design1/>
            <Design1/>
            <Design1/>
            <Design1/>
            <Design1/>
            <Design1/>
            <Design1/>
            <Design1/>
            <Design1/>
            <Design1/>
            <Design1/>
            <Design1/>
        </div>
    </Fragment>);

}
export default Channel;