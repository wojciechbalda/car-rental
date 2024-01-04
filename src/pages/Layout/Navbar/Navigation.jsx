import { NavLink } from 'react-router-dom'
import classes from './Navigation.module.css'
import { useContext } from 'react'
import { AuthContext } from '../../../contexts/AuthContext'

function Navigation({isOpen})
{
    const { isUserLoggedIn } = useContext(AuthContext)

    return <ul className={`${isOpen ? ' ' : classes.close} ${classes.menu}`}>
        <li><NavLink  className={({isActive}) => `${classes.link} ${isActive ? classes.active : ''}`} end to='/cars'>Cars</NavLink></li>
        <li><NavLink  className={({isActive}) => `${classes.link} ${isActive ? classes.active : ''}`} to='/contact'>Contact</NavLink></li>
        {isUserLoggedIn && <li><NavLink className={classes.link} to='/admin'>Admin panel</NavLink></li>}
        {!isUserLoggedIn && <li><NavLink className={classes.link} to='/login'>Log in</NavLink></li>}
    </ul>
}

export default Navigation