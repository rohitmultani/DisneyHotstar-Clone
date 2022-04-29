import SmallLayout from "../Layout/SmallLayout";
import classes from './LatestLayer.module.css';
import Batman from "../../Images/batman.webp"
import HiddenDetails from "../HiddenComponents/HiddenDetails";
const LatestLayer=(props)=>{
    const imAddress=`http://image.tmdb.org/t/p/w500/${props.image}`
    return(
        <SmallLayout>
            <div className={classes.SingleBox}> 
                
<img src={imAddress} className={classes.batImg}></img>
<div className={classes.hiddenInfo}>
    <HiddenDetails 
    id={props.id}
    title={props.title}
    detail={props.detail}
    image={props.image}
    />
</div>
            </div>
        </SmallLayout>
    )
}
export default LatestLayer;