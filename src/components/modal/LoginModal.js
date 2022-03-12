import { auth, provider } from "../../Firebase";
import cancel from "../../Images/cancel.svg";
import classes from "./LoginModal.module.css";
import React, { useState } from "react";
import InitialModal from "./InitialModal";
import ModalBar from "./ModalBar";
import PhoneModal from "./PhoneModal";
import Otp from "./Otp";

const LoginModal = (props) => {
  const [status, setStatus] = useState(false);
  const [newState, setNewState] = useState(true);
  const [digit, setDigit] = useState("");
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
  return (
    <ModalBar>
      {!status ? (
        <InitialModal phoneOpen={phoneHandler} modalOpen={modalHandler} />
      ) : newState ? (
        <PhoneModal
          digit={digit}
          check={returnHandler}
          next={nextHandler}
          modalOpen={modalHandler}
        />
      ) : (
        <Otp modalOpen={modalHandler} prev={nextHandler} />
      )}
    </ModalBar>
  );
};
export default LoginModal;
