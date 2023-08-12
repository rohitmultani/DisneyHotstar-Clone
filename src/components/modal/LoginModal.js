import { auth } from "../../Firebase";
import React, { useState, useRef, memo } from "react";
import InitialModal from "./InitialModal";
import ModalBar from "./ModalBar";
import PhoneModal from "./PhoneModal";
import Otp from "./Otp";

const LoginModal = (props) => {
  const [status, setStatus] = useState(false);
  const [newState, setNewState] = useState(true);
  const [loggedIn, setLoggedIn] = useState(true);
  // const [password, setPass] = useState();
  const [last4, setLast4] = useState();
  const [phone, setPhone] = useState("");
  const [profName, setprofname] = useState("");
  const password = useRef();
  const [digit, setDigit] = useState("");
  auth.onAuthStateChanged((user) => {
    if (user) {
      return setLoggedIn(true);
    }
    setLoggedIn(false);
    console.log(loggedIn)
  });
  const phoneHandler = (value, num) => {
    // props.modalOpen(value)
    setStatus(value);
    setDigit(num);
  };
  const modalHandler = (para) => {
    props.modalOpen(para);
  };
  const returnHandler = (value) => {
    setStatus(value);
  };
  const nextHandler = (value) => {
    setNewState(value);
  };
  const passwordHandler = (pass) => {
    password.current = pass;
  };
  const userPhone = (value) => {
    setPhone(value);
    console.log(phone);
  };
  const lastDigits = (value) => {
    setLast4(value);
  };
  const profileHandler = (name) => {
    setprofname(name);
    console.log(profName)
  };
  return (
    <ModalBar>
      {!status ? (
        <InitialModal
          phoneOpen={phoneHandler}
          modalOpen={modalHandler}
          prof={profileHandler}
        />
      ) : newState ? (
        <PhoneModal
          digit={digit}
          check={returnHandler}
          next={nextHandler}
          modalOpen={modalHandler}
          password={password.current}
          digitLast={lastDigits}
        />
      ) : (
        <Otp
          modalOpen={modalHandler}
          phoneNum={last4}
          prev={nextHandler}
          password={passwordHandler}
          userDetails={userPhone}
        />
      )}
    </ModalBar>
  );
};
export default memo(LoginModal);
