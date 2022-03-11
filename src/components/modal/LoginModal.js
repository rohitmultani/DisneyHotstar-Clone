import { auth,provider } from "../../Firebase";
import cancel from "../../Images/cancel.svg";
import classes from "./LoginModal.module.css";
const LoginModal = (props) => {
  const LoginHandler=()=>{
    auth.signInWithPopup(provider)
  .then((res)=>{
    console.log(res.additionalUserInfo.profile.name);
    props.modalOpen(false);
  })
  .catch((err)=>{
    console.log(err)
  })
  }
  return (
    <div className={classes.modalBar}>
      <div
        className={classes.cancelImage}
        onClick={() => {
          props.modalOpen(false);
        }}
      >
        <img src={cancel} alt="cancel"></img>
      </div>
      <div className={classes.modalText}>Login to continue</div>
      <div className={classes.modalSign} onClick={LoginHandler}>Sign In with Google</div>
    </div>
  );
};
export default LoginModal;
