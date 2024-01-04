import { Link } from 'react-router-dom'
import Badge from './Badge'
import classes from './CarCard.module.css'
import Card from '../UI/Card'
import CardContent from '../UI/CardContent'
import CardMedia from '../UI/CardMedia'

function CarCard({carData, isEditable = false, onDelete = null})
{
    const {make, model, year, engine, seats, doors, id, type} = carData
    return (
        <Card className={classes.card}>
            <CardMedia>
                <img src='https://images.unsplash.com/photo-1566473965997-3de9c817e938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80' />
            </CardMedia>
            <CardContent>
                <h2>{make} {model}</h2>
                <p>{year}<span className={classes.dot}>&bull;</span>{type || 'Sport car'}</p>
                <div className={classes.details}>
                    <Badge>{doors} doors</Badge>
                    <Badge>{engine} hp</Badge>
                    <Badge>{seats} seats</Badge>
                </div>
                {isEditable && <Link to={`/admin/cars/${id}`} className={classes.btn}>Edit</Link>}
                {onDelete && <button onClick={() => onDelete(id)} className={classes.btn}>Delete</button>}
                {!isEditable && <Link to={`/cars/${id}`} className={classes.btn}>Inquire</Link>}
            </CardContent>
        </Card>
    )
}

export default CarCard