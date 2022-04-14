import classes from './SliderLayout.module.css'
const SliderLayout=(props)=>{
    return(
        <div className={classes.SliderLayout}>
            {props.children}
        </div>
    )
};
export default SliderLayout;