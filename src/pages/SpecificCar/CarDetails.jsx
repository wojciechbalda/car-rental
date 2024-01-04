import CarDetail from "./CarDetail";
import classes from "./CarDetails.module.css";
import { PiEngineBold } from "react-icons/pi";
import { FaCarSide } from "react-icons/fa";
import { GiCarSeat } from "react-icons/gi";
import { MdSpeed } from "react-icons/md";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { PiGearSixBold } from "react-icons/pi";

function CarDetails({ engine, seats, doors, acceleration, year, type }) {
  return (
    <div className={classes["car-details"]}>
      <CarDetail property="engine" value={engine} icon={<PiEngineBold />} />
      <CarDetail property="seats" value={seats} icon={<FaCarSide />} />
      <CarDetail property="doors" value={doors} icon={<GiCarSeat />} />
      <CarDetail property="0-60 mph" value={acceleration} icon={<MdSpeed />} />
      <CarDetail
        property="year of production"
        value={year}
        icon={<BsFillCalendarDateFill />}
      />
      <CarDetail property="type" value={type} icon={<PiGearSixBold />} />
    </div>
  );
}

export default CarDetails;
