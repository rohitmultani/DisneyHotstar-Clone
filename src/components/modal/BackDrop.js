import classes from './BackDrop.module.css'
const BackDrop=(props)=>{
    return(
        <div className={classes.backdrop}  onClick={() => {
            props.backdropOpen(false);
          }}>
            
        </div>
    );
};
export default BackDrop;