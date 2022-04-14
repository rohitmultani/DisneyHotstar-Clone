import SliderLayout from '../Layout/SliderLayout'
import batman from '../../Images/batman.webp';
import classes from './Layer1.module.css'
const Layer1 =(props)=>{
    return(
        <SliderLayout>
            <div className={classes.layout}>

            <div className={classes.titleHead}>
            <div className={classes.title}>{props.title}</div>
            <div className={classes.genre}>Action</div>
            <div className={classes.description}>A grim, gritty, and gripping super-noir, The Batman ranks among the Dark Knight's bleakest -- and most thrillingly ambitious -- live-action outings.</div>
            </div>
            
<img src={batman} className={classes.img}></img>
            
            </div>
        </SliderLayout>
    )
}
export default Layer1;