import classes from './Logo.module.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

function Logo()
{
    return <div className={classes['img-container']}>
        <Link to='/'>
            <img src={logo} />
        </Link>
    </div>
}

export default Logo