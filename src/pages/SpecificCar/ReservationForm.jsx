import DatePicker from "react-datepicker";
import classes from './ReservationForm.module.css'
import FormWrapper from "../../components/Form/FormWrapper"
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate, useParams } from "react-router-dom";
import useCalendarLogic from "../../hooks/useCalendarLogic";


function convertDateToString(date)
{
   return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
}

function ReservationForm({pricePerDay})
{

  const { carID } = useParams()
  const navigate = useNavigate()
  const {setStartDate, setEndDate, amountOfDays, startDate, endDate, excludedDateIntervals, isValid, isError} = useCalendarLogic(carID)
  // const [excludedDateIntervals, setExcludedDateIntervals] = useState([]); 

  // useEffect(() => {
  //   const getDataToExludeSomeDates = async () => 
  //   {
  //     const currentDate = new Date()
  //     let day = currentDate.getDate();
  //     let month = currentDate.getMonth() + 1;
  //     const year = currentDate.getFullYear();

  //     day = (day < 10) ? '0' + day : day;
  //     month = (month < 10) ? '0' + month : month;

  //     const dateString = year + '-' + month + '-' + day;

  //     let { data: reservations, error} = await supabase
  //     .from('reservations')
  //     .select('start_date, end_date')
  //     .gte('end_date', dateString)
  //     .eq('carID', carID)

  //     if (error)
  //       throw new Error("Something went wrong");
      
  //     const dates = reservations.map(reservation => {
  //       return {
  //         start: new Date(reservation.start_date),
  //         end: new Date(reservation.end_date)
  //       }
  //     })
  //     setExcludedDateIntervals(dates)
  //   }
  //   getDataToExludeSomeDates()
  // }, [carID])
  
  //   const [dateRange, setDateRange] = useState([null, null]);
  //   const [startDate, endDate] = dateRange;
  
  //   const amountOfDays = (endDate - startDate) / (1000 * 3600 * 24)

  //   let isError;
  //   for (const date of excludedDateIntervals)
  //   {
  //     if ( date.start - startDate > 0 && date.end - endDate < 0)
  //     {
  //       isError = true;
  //       break;
  //     }
  //   }
  //   const isValid = startDate && endDate && !isError 

    function handleSubmit(e)
    { 
      e.preventDefault()
      navigate(`reservation?startDate=${convertDateToString(startDate)}&endDate=${convertDateToString(endDate)}`)
    }

    return (
        <>
        <div className={classes.form}>
            <FormWrapper onSubmit={handleSubmit} >
              <div>
                <p>${pricePerDay}/day</p>
                <p>Select start and end date:</p>
              </div>
              <DatePicker
              onFocus={(e) => e.target.readOnly = true}
              placeholderText="Click"
              selectsRange={true}
              minDate={new Date()}
              maxDate={null}
              startDate={startDate}
              calendarStartDay={1}
              endDate={endDate}
              onChange={(update) => {
                const [start, end] = update
                // setDateRange(update);
                setStartDate(start)
                setEndDate(end)
              }}
              excludeDateIntervals={excludedDateIntervals}
              selectsDisabledDaysInRange
              />
              {isError && <p>You cannot select a range containing current reservations</p>}
            { isValid && (<div>
              <p>Total price: </p>
              <p><span>${pricePerDay} x {amountOfDays}d</span> = <span>${pricePerDay * amountOfDays}</span></p>
            </div>)}
            <button disabled={!isValid}>Book the car</button>
            </FormWrapper>
          </div>
        </>
    )
}

export default ReservationForm