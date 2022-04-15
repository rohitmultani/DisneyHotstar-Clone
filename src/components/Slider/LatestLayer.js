import SmallLayout from "../Layout/SmallLayout";
import classes from './LatestLayer.module.css';
import Batman from "../../Images/batman.webp"
import HiddenDetails from "../HiddenComponents/HiddenDetails";
const LatestLayer=(props)=>{
    return(
        <SmallLayout>
            <div className={classes.SingleBox}> 
                
<img src={Batman} className={classes.batImg}></img>
<div className={classes.hiddenInfo}>
    <HiddenDetails/>
</div>
            </div>
        </SmallLayout>
    )
}
export default LatestLayer;