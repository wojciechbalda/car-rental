import { Link } from "react-router-dom";

function ReservationItem({ reservationData }) {
  function getFormattedDate(dateAsText) {
    const date = new Date(dateAsText);
    return `${date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()}.${
      (date.getMonth() + 1) < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
    }.${date.getFullYear()}`;
  }

  const {
    start_date: startDate,
    end_date: endDate,
    email,
    carID,
    id,
  } = reservationData;
  const formattedStartDate = getFormattedDate(startDate);
  const formattedEndDate = getFormattedDate(endDate);

  return (
    <tr>
      <td>{formattedStartDate}</td>
      <td>{formattedEndDate}</td>
      <td>{email}</td>
      <td>{carID}</td>
      <td>
        <Link to={`${id}`}>Details</Link>
      </td>
    </tr>
  );
}

export default ReservationItem;
