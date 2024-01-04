import classes from './CardMedia.module.css'

function CardMedia({children})
{
    return (
        <div className={classes['img-container']}>
            {children}
        </div>
    )
}

export default CardMedia