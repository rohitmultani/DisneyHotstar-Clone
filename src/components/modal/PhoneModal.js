import React,{Fragment,useState}from "react";
import cancel from "../../Images/cancel.svg";
import arrow from "../../Images/arrow.svg";
import classes from "./LoginModal.module.css";
const PhoneModal=(props)=>{
    const [disable,setDisable]=useState(true)
    const checkHandler=(event)=>{
        const mobNum=event.target.value;
if(mobNum.trim()===""){
    props.check(false)
}
else if (mobNum.length===10)(
    setDisable(false)
)
else{
    setDisable(true)
}
    }
    const prevHandler=()=>{
        props.check(false)
    }
    const cancelHandler=()=>{

        props.modalOpen(false)
    }
    const otpGenerator=()=>{

        props.next(false)
    }
    return(
        <Fragment>
            <div
        className={classes.imagesState}
>

        <img src={arrow} alt="prevState" onClick={prevHandler}></img>
        <img src={cancel} alt="cancel" onClick={cancelHandler}></img>
      </div>
      <div className={classes.modalText}>Continue using Phone</div>
      <div className={classes.modalPhone}>
        <span>+91 | </span>
        <input type="tel" placeholder="Enter Your Mobile Number" min="0" maxLength="10" autoFocus defaultValue={props.digit} onChange={checkHandler}></input>
        </div>
        <button type="submit" className={classes.btn} onClick={otpGenerator} disabled={disable}>CONTINUE</button>
            <div className={classes.description}>By Proceeding you agree to the  
            <span> Terms of use</span> and <span>Privacy policy</span>
            </div>
        </Fragment>
    )
}
export default PhoneModal;