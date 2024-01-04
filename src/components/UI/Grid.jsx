import classes from './Grid.module.css'

function Grid({children})
{
    return <div className={classes.grid}>{children}</div>
}

export default Grid