import { useEffect, useState } from "react";
import supabase from "../config/supabase";

function useCalendarLogic(carID, startDateDefault = null, endDateDefault = null) 
{
  const [excludedDateIntervals, setExcludedDateIntervals] = useState([]); 
  useEffect(() => {
    const getDataToExludeSomeDates = async () => 
    {
      const currentDate = new Date()
      let day = currentDate.getDate();
      let month = currentDate.getMonth() + 1;
      const year = currentDate.getFullYear();

      day = (day < 10) ? '0' + day : day;
      month = (month < 10) ? '0' + month : month;

      const dateString = year + '-' + month + '-' + day;

      let { data: reservations, error} = await supabase
      .from('reservations')
      .select('start_date, end_date')
      .gte('end_date', dateString)
      .eq('carID', carID)

      if (error)
        throw new Error("Something went wrong");
      
      const dates = reservations.map(reservation => {
        return {
          start: new Date(reservation.start_date),
          end: new Date(reservation.end_date)
        }
      })
      setExcludedDateIntervals(dates)
    }
    getDataToExludeSomeDates()
  }, [carID])
  // const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, setStartDate] = useState(startDateDefault)
  const [endDate, setEndDate] = useState(endDateDefault)
    // const [startDate, endDate] = dateRange;
  
    const amountOfDays = (endDate - startDate) / (1000 * 3600 * 24)

    let isError;
    for (const date of excludedDateIntervals)
    {
      if ( date.start - startDate > 0 && date.end - endDate < 0)
      {
        isError = true;
        break;
      }
    }
    const isValid = startDate && endDate && !isError 
  
    return {isValid, isError, amountOfDays, excludedDateIntervals, setStartDate, setEndDate, startDate, endDate}
}

export default useCalendarLogic