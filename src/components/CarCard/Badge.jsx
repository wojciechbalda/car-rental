import classes from './Badge.module.css'

function Badge({children})
{
    return (
        <div className={classes.badge}>{children}</div>
    )
}

export default Badge