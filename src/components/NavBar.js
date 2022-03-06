import classes from './NavBar.module.css';
import menu from '../Images/menu.svg'
const NavBar =()=>{
    return (<nav className={classes.NavBar}>
        <div className={classes.sectionFirst}>
            <ul className={classes.sectionFirstList}>
                <li><img src={menu} alt="menu" className={classes.menu}/></li>
                <li>TV</li>
                <li>Movies</li>
                <li>Sports</li>
                <li>Disney+</li>
                <li>Kids</li>
                <li></li>
            </ul>
            </div>
        <div className={classes.sectionSecond}>
            <ul className={classes.sectionSecondList}>
                <li>
                    <form><input type="search" placeholder="Search" className={classes.search}></input></form>
                </li>
                <li>Auth</li>
            </ul>
            </div>
    </nav>)
};
export default NavBar;