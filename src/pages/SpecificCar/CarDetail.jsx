import classes from './CarDetail.module.css'

function CarDetail({property, value, icon})
{
    return (
        <div className={classes['car-detail']}>
            {icon}
            <div>
                <span>{property}</span>
                <span>{value}</span>
            </div>
        </div>
    )
}

export default CarDetail