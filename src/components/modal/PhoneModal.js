import React, { Fragment, useState } from "react";
import firebase from "firebase/app";
import { memo } from "react";
import cancel from "../../Images/cancel.svg";
import arrow from "../../Images/arrow.svg";
import classes from "./LoginModal.module.css";
const PhoneModal = (props) => {
  const [disable, setDisable] = useState(true);
  const [phoneNum, setPhoneNum] = useState();
  const [last4, setLast4] = useState();
  const [load, setLoad] = useState(false);
  const setUpRecaptcha = () => {
    setLoad(true);
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier("sign", {
      size: "invisible",
      callback: (response) => {
        console.log("recapta");
        setLoad(false);
        props.next(false);
        onSignInSubmit();
      },
    });
    console.log("recaptch");
  };

  const onSignInSubmit = (event) => {
    event.preventDefault();
    setUpRecaptcha();
    props.digitLast(last4);
    const appVerifier = window.recaptchaVerifier;

    firebase
      .auth()
      .signInWithPhoneNumber(phoneNum, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
      })
      .catch((error) => {
        console.log("not sent");
      });
  };
  const checkHandler = (event) => {
    const mobNum = "+91" + event.target.value;
    const shrinkNum = mobNum.slice(9, 13);
    setLast4(shrinkNum);
    setPhoneNum(mobNum);
    if (event.target.value === "") {
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
 
  return (
    <Fragment>
      <div className={classes.imagesState}>
        <img src={arrow} alt="prevState" onClick={prevHandler}/>
        <img src={cancel} alt="cancel" onClick={cancelHandler}/ >
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
      >
        {!load ? <span>CONTINUE</span> : <span>Sending OTP</span>}
      </button>
      <div className={classes.description} id="description">
        By Proceeding you agree to the
        <span> Terms of use</span> and <span>Privacy policy</span>
        <div id="sign" className={classes.recapta}></div>
      </div>
    </Fragment>
  );
};
export default memo(PhoneModal);
