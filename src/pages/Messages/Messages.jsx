import Message from './Message'
import { useLoaderData } from 'react-router-dom'

function Messages()
{
    const messages = useLoaderData()[0]

    return (
        <table>
            <thead>
            <tr>
                <th>Date</th>
                <th>Email</th>
                <th>Subject</th>
                <th>Details</th>
            </tr>
            </thead>
            <tbody>
                {messages.map((message) => <Message key={message.id} messageData={message} />)}
            </tbody>
        </table>
    )
}

export default Messages