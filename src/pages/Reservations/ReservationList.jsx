import ReservationItem from "./ReservationItem"
import { useLoaderData } from "react-router-dom"

function ReservationList()
{

    const data = useLoaderData()[0]

    return (
        <table>
            <thead>
            <tr>
                <th>Start date</th>
                <th>End date</th>
                <th>Email</th>
                <th>CarID</th>
                <th>Details</th>
            </tr>
            </thead>
            <tbody>
                {data.map((reservation) => <ReservationItem key={reservation.id} reservationData={reservation} />)}
            </tbody>
        </table>
    )
}

export default ReservationList