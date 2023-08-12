import classes from "./Footer.module.css";
import { Fragment } from "react";
import Github from "../Images/Github.svg";
import insta from "../Images/Insta.svg";
import Linkedln from "../Images/Linkedln.svg";
import Twitter from "../Images/twitter.svg";
const Footer = () => {
  return (
    <Fragment>
      <div className={classes.footer}>
        <div className={classes.leftFooter}>
          <div className={classes.leftFooter1}>
            <div>About</div>
            <div>Terms Of Use</div>
            <div>Privacy Policy</div>
            <div> FAQ</div>
            <div>FeedBack</div>
            <div>Careers</div>
          </div>
          <div className={classes.leftFooter2}>
            All rights reserved to Developer @RohitMultani
          </div>
        </div>
        <div className={classes.rightFooter}>
          <div className={classes.rightFooter1}> Connect With Me</div>
          <div className={classes.connect}>
            <div>
              <a
                href="https://github.com/rohitmultani"
                target="_blank"
                rel="noreferrer"
              >
                <img src={Github} alt="github" />
              </a>
            </div>
            <div>
              <a
                href="https://mobile.twitter.com/mr_rohit27"
                target="_blank"
                rel="noreferrer"
              >
                <img src={Twitter} alt="twitter" />
              </a>
            </div>

            <div>
              <a
                href="https://www.instagram.com/invites/contact/?i=1e06112izlkkd&utm_content=kkxzerz"
                target="_blank"
                rel="noreferrer"
              >
                <img src={insta} alt="insta" />
              </a>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/in/rohit-multani-885b57213/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={Linkedln} alt="linkedln" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Footer;
