import classes from '../NavBar.module.css';
const HiddenProfile=()=>{
    return(<ul className={classes.hiddenProfile }>
        <li>WatchList</li>
        <li>My Account</li>
        <li>Logout</li>
    </ul>)
};
export default HiddenProfile;