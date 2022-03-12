import classes from './ModalBar.module.css'
const ModalBar=(props)=>{
    return(
        <div className={classes.modalBar}>
            {props.children}
        </div>
    )
};
export default ModalBar;