import { Fragment, memo } from "react";
import { auth, provider } from "../../Firebase";
import cancel from "../../Images/cancel.svg";
import classes from "./LoginModal.module.css";
const InitialModal = (props) => {
  const LoginHandler = () => {
    auth
      .signInWithPopup(provider)
      .then((res) => {
        props.prof(res.additionalUserInfo.profile.name);
        setTimeout(() => {
          props.modalOpen(false);
        }, 1400);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const mobilePhoneHandler = (event) => {
    props.phoneOpen(true, event.target.value);
  };
  return (
    <Fragment>
      <div
        className={classes.cancelImage}
        onClick={() => {
          props.modalOpen(false);
        }}
      >
        <img src={cancel} alt="cancel" />
      </div>
      <div className={classes.modalText}>Login to continue</div>
      <div className={classes.modalSign} onClick={LoginHandler}>
        Sign In with Google
      </div>
      <div className={classes.modalOption}>or</div>
      <div className={classes.modalPhone}>
        <span>+91 | </span>
        <input
          type="tel"
          placeholder="Enter Your Mobile Number"
          min="0"
          maxLength="10"
          onChange={mobilePhoneHandler}
          autoFocus
        ></input>
      </div>
    </Fragment>
  );
};
export default memo(InitialModal);
