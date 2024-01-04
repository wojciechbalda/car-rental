import { Link } from 'react-router-dom'
import classes from './Message.module.css'

function Message({messageData})
{
    const {created_at: date, email, subject, is_read: isRead, id} = messageData
    
    const dateObj = new Date(date)
    const formattedDate = `${dateObj.getDate() < 10 ? "0" : ""}${dateObj.getDate()}.${dateObj.getMonth() + 1 < 10 ? "0" : ""}${dateObj.getMonth() + 1}.${dateObj.getFullYear()} ${dateObj.getHours() < 10 ? "0" : ""}${dateObj.getHours()}:${dateObj.getMinutes() < 10 ? "0" : ""}${dateObj.getMinutes()}`

    return  (
        <tr className={`${isRead && classes.read}`}>
            <td>{formattedDate}</td>
            <td>{email}</td>
            <td>{subject}</td>
            <td><Link to={`${id}`}>Details</Link></td>
        </tr>
    )
}

export default Message