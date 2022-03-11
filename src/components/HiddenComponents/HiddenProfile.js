import classes from '../NavBar.module.css';
import {auth} from "../../Firebase"
const HiddenProfile=(props)=>{
    const logout =()=>{
        auth.signOut();
        props.logoutHandler(false);
        console.log("true")

    }
    return(<ul className={classes.hiddenProfile }>
        <li>WatchList</li>
        <li>My Account</li>
        <li onClick={logout}>Logout</li>
    </ul>)
};
export default HiddenProfile;