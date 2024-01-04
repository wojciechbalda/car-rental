import classes from './Hamburger.module.css'
import { FaBars, FaXbox } from 'react-icons/fa'

function Hamburger({onClick, isOpen})
{
    return  (
        <button onClick={onClick} className={classes.hamburger}>{isOpen ? <FaXbox /> : <FaBars /> }</button>
    )
}

export default Hamburger