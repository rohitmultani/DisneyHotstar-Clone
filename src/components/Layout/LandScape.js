import classes from './LandScape.module.css'
const LandScape=(props)=>{
    return(<div className={classes.landScapeContainer}>
{props.children}
    </div>)
}
export default LandScape;