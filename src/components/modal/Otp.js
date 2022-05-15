import React, { Fragment, useState, useRef, memo } from "react";
import cancel from "../../Images/cancel.svg";
import arrow from "../../Images/arrow.svg";
import classes from "./LoginModal.module.css";
const Otp = (props) => {
  const [disable, setDisable] = useState(true);
  const [otpNum, setOtpNum] = useState();
  const [loading, setLoading] = useState(false);
  const [errMesaage, setErrMessage] = useState("");
  const otp = useRef({
    otp1: "",
    otp2: "",
    otp3: "",
    otp4: "",
    otp5: "",
    otp6: "",
  });
  const changeHandler = (valueNew, event) => {
    const newOtp = { [valueNew]: event.target.value };
    otp.current = { ...otp.current, ...newOtp };
    if (valueNew === "otp6") {
      const otpAuth =
        otp.current.otp1 +
        otp.current.otp2 +
        otp.current.otp3 +
        otp.current.otp4 +
        otp.current.otp5 +
        otp.current.otp6;
      setOtpNum(otpAuth);
      if (otpAuth.length === 6) {
        setDisable(false);
      } else {
        setDisable(true);
      }
    }
  };
  const inputfocus = (elmnt) => {
    if (elmnt.key === "Delete" || elmnt.key === "Backspace") {
      const next = elmnt.target.tabIndex - 2;
      if (next > -1) {
        elmnt.target.previousSibling.focus();
      }
    } else {
      const next = elmnt.target.tabIndex + 1;
      if (next < 7) {
        elmnt.target.nextSibling.focus();
      }
    }
  };
  const otpSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    console.log(otpNum);

    const code = otpNum;
    console.log(code);
    window.confirmationResult
      .confirm(code)
      .then((result) => {
        const user = result.user;
        setLoading(false);
        // setVerify(true)
        // props.modalOpen(false);
        setTimeout(() => {
          props.modalOpen(false);
        }, 1400);
        props.userDetails(user.phoneNumber);
      })
      .catch((error) => {
        console.log(error.message);
        setErrMessage(error.message);
        setTimeout(() => {
          props.prev(false);
        }, 1200);
        // props.prev(true)
      });
    props.password(otpNum);
  };

  return (
    <Fragment>
      <div className={classes.imagesState}>
        <img src={arrow} alt="prevState" onClick={() => props.prev(true)}/>
        <img
          src={cancel}
          alt="cancel"
          onClick={() => props.modalOpen(false)}
        />
      </div>
      <div className={classes.modalText}>
        {`Enter the 6-digit code sent to +91******` + props.phoneNum}
      </div>
      <div className={classes.modalOtp}>
        <input
          type="text"
          tabIndex="1"
          maxLength="1"
          ref={otp.current.opt1}
          onChange={(e) => changeHandler("otp1", e)}
          onTouchStartCapture={(e)=>changeHandler("otp1", e)}
          onKeyUp={(e) => inputfocus(e)}
          autoFocus
        ></input>
        <input
          type="text"
          tabIndex="2"
          maxLength="1"
          ref={otp.current.opt2}
          onChange={(e) => changeHandler("otp2", e)}
          onTouchStartCapture={(e)=>changeHandler("otp2", e)}
          onKeyUp={(e) => inputfocus(e)}
        ></input>
        <input
          type="text"
          tabIndex="3"
          maxLength="1"
          ref={otp.current.opt3}
          onChange={(e) => changeHandler("otp3", e)}
          onTouchStartCapture={(e)=>changeHandler("otp3", e)}
          onKeyUp={(e) => inputfocus(e)}
        ></input>
        <input
          type="text"
          tabIndex="4"
          maxLength="1"
          ref={otp.current.opt4}
          onChange={(e) => changeHandler("otp4", e)}
          onTouchStartCapture={(e)=>changeHandler("otp4", e)}
          onKeyUp={(e) => inputfocus(e)}
        ></input>
        <input
          type="text"
          tabIndex="5"
          maxLength="1"
          ref={otp.current.opt5}
          onChange={(e) => changeHandler("otp5", e)}
          onTouchStartCapture={(e)=>changeHandler("otp5", e)}
          onKeyUp={(e) => inputfocus(e)}
        ></input>
        <input
          type="text"
          tabIndex="6"
          maxLength="1"
          ref={otp.current.opt6}
          onChange={(e) => changeHandler("otp6", e)}
          onTouchStartCapture={(e)=>changeHandler("otp6", e)}
          onKeyUp={(e) => inputfocus(e)}
        ></input>
      </div>
      <button
        type="submit"
        className={classes.btn}
        onClick={otpSubmit}
        disabled={disable}
      >
        {loading ? <span>Verifying...</span> : <span>Verify OTP</span>}
      </button>
      <div className={classes.errBlock}>{errMesaage}</div>
    </Fragment>
  );
};
export default memo(Otp);
