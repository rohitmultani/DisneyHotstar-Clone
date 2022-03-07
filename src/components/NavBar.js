import React,{useState,useEffect} from 'react'
import classes from './NavBar.module.css';
import menu from '../Images/menu.svg'
import login from '../Images/login.png'
import disney from '../Images/Disney (2).svg'
import List from '../listItems/List'
const NavBar =()=>{
    const [focus,setFocus]=useState(false);
    const focusHandler=()=>{setFocus(true)};
    return (<nav className={classes.NavBar}>
           <ul className={classes.sectionFirstList}>
                <li><img src={menu} alt="menu" className={classes.menu}/></li>
                <img src={disney} alt="menu" className={classes.menuLogo}/>
                <List/>
            </ul>
            <ul className={classes.sectionSecondList}>
                <li>
                    <form><input type="search" placeholder="Search" className={classes.search} onFocus={focusHandler}></input></form>
                </li>
                <li className={classes.profile}><img src={login} alt="menu" className={classes.menu}/>
                <ul className={classes.hiddenProfile }>
            <li>WatchList</li>
            <li>My Account</li>
            <li>Logout</li>
        </ul>
                </li>
            </ul>
    </nav>)
};
export default NavBar;