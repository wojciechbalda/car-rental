import classes from './CardContent.module.css'

function CardContent({children})
{
    return (
        <div className={classes.content}>
            {children}
        </div>
    )
}

export default CardContent