import { Link } from 'react-router-dom'
import classes from './AddButton.module.css'

function AddButton({onClick})
{
    return (
        <Link to="add" onClick={onClick} className={classes.btn}> 
            +
        </Link>
    )
}

export default AddButton