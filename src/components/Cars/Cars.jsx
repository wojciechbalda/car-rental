import CarCard from "../CarCard/CarCard";
import Grid from "../UI/Grid";

function Cars({ data, isEditable, onDelete = null }) {
  return (
    <Grid>
      {data.map((car) => (
        <CarCard
          key={car.id}
          carData={car}
          isEditable={isEditable}
          onDelete={onDelete}
        />
      ))}
    </Grid>
  );
}

export default Cars;
