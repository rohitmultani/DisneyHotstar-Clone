import React, { Fragment, useState } from "react";
import firebase from "firebase/app";

import cancel from "../../Images/cancel.svg";
import arrow from "../../Images/arrow.svg";
import classes from "./LoginModal.module.css";
const PhoneModal = (props) => {
  const [disable, setDisable] = useState(true);
  const [phoneNum, setPhoneNum] = useState();
  const [load,setLoad]=useState(false);
  const setUpRecaptcha = () => {
    setLoad(true);
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier("sign", {
      size: "invisible",
      callback: (response) => {
        console.log("recapta");
        setLoad(false)
        props.next(false);
        onSignInSubmit();
      },
    });
    console.log("recaptch");
  };

  const onSignInSubmit = (event) => {
    event.preventDefault();
    setUpRecaptcha();
    const appVerifier = window.recaptchaVerifier;

    firebase
      .auth()
      .signInWithPhoneNumber(phoneNum, appVerifier)
      .then((confirmationResult) => {
        console.log("sms sent");
        console.log(props.password);
        window.confirmationResult = confirmationResult;
       const code =window.prompt("enter otp");
        console.log(code)
        confirmationResult
          .confirm(code)
          .then((result) => {
            const user = result.user;
            console.log("ok");
           })
          .catch((error) => {
            console.log("not");
          });
      })
      .catch((error) => {
        console.log("not sent");
      });
  };
  const checkHandler = (event) => {
    const mobNum = "+91"+event.target.value;
    setPhoneNum(mobNum);
    if (mobNum.trim() === "") {
      console.log(true)
      props.check(false);
    } else if (mobNum.length === 13) setDisable(false);
    else {
      setDisable(true);
    }
  };
  const prevHandler = () => {
    props.check(false);
  };
  const cancelHandler = () => {
    props.modalOpen(false);
  };
  const otpGenerator = () => {
    props.next(false);
  };
  return (
    <Fragment>
      <div className={classes.imagesState}>
        <img src={arrow} alt="prevState" onClick={prevHandler}></img>
        <img src={cancel} alt="cancel" onClick={cancelHandler}></img>
      </div>
      <div className={classes.modalText}>Continue using Phone</div>
      <div className={classes.modalPhone}>
        <span>+91 | </span>
        <input
          type="tel"
          placeholder="Enter Your Mobile Number"
          min="0"
          maxLength="10"
          autoFocus
          defaultValue={props.digit}
          onChange={checkHandler}
        ></input>
      </div>
      <button
        type="submit"
        className={classes.btn}
        onClick={onSignInSubmit}
        disabled={disable}
        // onSubmit={onSignInSubmit}
      >
  
        {!load?<span>CONTINUE</span>:<span>Loading...</span>}
      </button>
      <div className={classes.description} id="description">
        By Proceeding you agree to the
        <span> Terms of use</span> and <span>Privacy policy</span>
        <div id="sign"></div>
      </div>
    </Fragment>
  );
};
export default PhoneModal;
