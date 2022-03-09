import classes from '../NavBar.module.css';
import genre from '../../Images/genre.svg'
import lang from '../../Images/language.svg'
import channel from '../../Images/channel.svg'
const HiddenMenu =()=>{
    return(
        <ul className={classes.hiddenMenu}>
                    <li>
                        <img src={channel} alt="channel"/>
                        Channels</li>
                    <li><img src={lang} alt="lang"/>Languages</li>
                    <li><img src={genre} alt="genre"/>Genre</li>
                </ul>)
};
export default HiddenMenu