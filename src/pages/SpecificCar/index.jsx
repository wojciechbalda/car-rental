import supabase from "../../config/supabase";
import { useLoaderData } from "react-router-dom";
import ContentContainer from "../../components/UI/ContentContainer";
import CarDetails from "./CarDetails";
import Gallery from "./Gallery";
import SectionTitle from "../Home/SectionTitle";
import classes from "./CarDetailsPage.module.css";
import ReservationForm from "./ReservationForm";

const images = [
  "https://cdn.pixabay.com/photo/2018/01/18/18/00/ferrari-3090880_1280.jpg",
  "https://cdn.pixabay.com/photo/2017/11/08/14/39/ferrari-f430-2930661_640.jpg",
  "https://cdn.pixabay.com/photo/2019/04/28/22/01/car-4164543_640.jpg",
  "https://cdn.pixabay.com/photo/2015/02/07/16/25/ferrari-627586_640.jpg",
  "https://cdn.pixabay.com/photo/2016/05/19/21/51/car-racing-1404060_640.jpg",
  "https://cdn.pixabay.com/photo/2015/05/17/19/07/wedding-car-771395_640.jpg",
  "https://cdn.pixabay.com/photo/2018/12/10/01/31/car-3866113_640.jpg",
  "https://cdn.pixabay.com/photo/2014/03/26/08/15/ferrari-298454_640.jpg",
];

export function Component() {
  const {
    make,
    model,
    description,
    engine,
    seats,
    acceleration,
    doors,
    year,
    type,
    price,
  } = useLoaderData();
  return (
    <div className={classes.page}>
      <ContentContainer>
        <h1 className={classes["page-title"]}>
          {make} {model}
        </h1>
        <div className={classes.grid}>
          <Gallery imgArray={images} />
          <ReservationForm pricePerDay={price} />
        </div>
        <CarDetails
          engine={engine}
          seats={seats}
          acceleration={acceleration}
          doors={doors}
          year={year}
          type={type}
        />
        <section>
          <SectionTitle title={`${make} ${model} - description`} />
          <p className={classes.description}>{description}</p>
        </section>
      </ContentContainer>
    </div>
  );
}


export async function loader({ params }) {
  const { carID } = params;

  const { data, error } = await supabase
    .from("cars")
    .select()
    .eq("id", carID)
    .single();

  if (error) throw Error("Something went wrong");
  return data;
}
