import FormWrapper from "../Form/FormWrapper";
import TextField from "../Form/TextField";

function CarForm({onSubmit, submitButtonText ,carData = {make: null, model: null, year: null, engine: null, seats: null, doors: null, acceleration: null, price: null, type: null, description: null}}) {

  const {make, model, year, engine, seats, doors, acceleration, price, type, description} = carData

  function handleSubmit(e)
  {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const formattedData = {
      make: data.get("make"),
      model: data.get("model"),
      year: +data.get("year"),
      engine: +data.get("engine"),
      seats: +data.get("seats"),
      doors: +data.get("doors"),
      acceleration: +data.get("acceleration"),
      price: +data.get("price"),
      type: data.get("type"),
      description: data.get("description"),
    }
   
      onSubmit(formattedData)
  } 

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <TextField label="Make:" name="make" defaultValue={make} />
      <TextField label="Model:" name="model" defaultValue={model} />
      <TextField type="number" label="Year of production:" name="year" defaultValue={year} />
      <TextField type="number" label="Engine (hp):" name="engine" defaultValue={engine} />
      <TextField type="number" label="Seats:" name="seats" defaultValue={seats} />
      <TextField type="number" label="Doors:" name="doors" defaultValue={doors} />
      <TextField type="number" step={0.1} label="0-60 mph (sec):" name="acceleration" defaultValue={acceleration} />
      <TextField type="number" label="Price per day:" name="price" defaultValue={price} />
      <div>
        <label htmlFor="type">Type of car</label>
        <select required id="type" name="type" defaultValue={type || ""}>
          {!type && <option value="" disabled>Choose type of the car</option>}
          <option value="hatchback">Hatchback</option>
          <option value="SUV">SUV</option>
          <option value="sport car">Sport car</option>
          <option value="sedan">Sedan</option>
        </select>
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea required id="description" name="description" defaultValue={description} />
      </div>
      <button>{submitButtonText}</button>
    </FormWrapper>
  );
}

export default CarForm;
