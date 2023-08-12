import classes from "./LoginModal.module.css";
import { Fragment, useEffect, useState, memo } from "react";
import { auth } from "../../Firebase";
import { Link } from "react-router-dom";
import NavBar from "../NavBar";
const Welcome = (props) => {
  const [email, setEmail] = useState();
  const [Image, setImage] = useState();
  const [profile, setProfile] = useState();
  const [phone, setPhone] = useState();
  const [show, setShow] = useState(false);
  const showHandler = () => {
    setShow(true);
  };
  useEffect(() => profileHandler, [show]);
  function profileHandler() {
    const user = auth.currentUser;
    console.log(user);

    if (user !== null) {
      user.providerData.forEach((profile) => {
        setProfile(profile.displayName);
        setEmail(profile.email);
        setPhone(profile.phoneNumber);
        setImage(profile.photoURL);
      });
    }
  }
  return (
    <Fragment>
      <NavBar />
      {!show ? (
        <div>
          <div className={classes.modalSign2} onClick={showHandler}>
            View Profile
          </div>
          <Link to="/WatchList" className={classes.link}>
            <div className={classes.modalSign2}>View WatchList</div>
          </Link>
        </div>
      ) : (
        <div>
          <div className={classes.welcome}>Welcome</div>
          <div className={classes.phone}>{phone}</div>
          <div className={classes.profileImage}>
            <img src={Image} alt="not available" />
          </div>
          <div className={classes.phone}>{profile}</div>
          <div className={classes.email}>{email}</div>
        </div>
      )}
    </Fragment>
  );
};
export default memo(Welcome);
