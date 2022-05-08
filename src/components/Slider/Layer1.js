import SliderLayout from '../Layout/SliderLayout'
import batman from '../../Images/batman.webp';
import classes from './Layer1.module.css'
const Layer1 =(props)=>{
    const imAddress=`http://image.tmdb.org/t/p/w500/${props.image}`
    return(
        <SliderLayout>
            <div className={classes.layout}>

            <div className={classes.titleHead}>
            <div className={classes.title}>{props.title}</div>
            <div className={classes.genre}>{props.genre}</div>
            <div className={classes.description}>{props.detail}</div>
            </div>
            
<img src={imAddress} className={classes.img}></img>
            
            </div>
        </SliderLayout>
    )
}
export default Layer1;