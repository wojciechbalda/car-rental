import { useLoaderData, useNavigate } from "react-router-dom";
import supabase from "../../config/supabase";
import FormWrapper from "../../components/Form/FormWrapper";

export function Component() {
  const navigate = useNavigate();
  const {created_at, carID, first_name, last_name, age, phone_number, accessories, start_date, end_date, email} = useLoaderData();

  function handleSubmit(e)
  {
    e.preventDefault()
    navigate(-1)
  }

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <div>
        <label htmlFor="date">Reservation created at:</label>
        <input id="date" disabled type="text" defaultValue={created_at} />
      </div>
      <div>
        <label htmlFor="id">Car&quot;s id:</label>
        <input id="id" disabled type="text" defaultValue={carID} />
      </div>
      <div>
        <label htmlFor="fname">First name:</label>
        <input id="fname" disabled type="text" defaultValue={first_name} />
      </div>
      <div>
        <label htmlFor="lname">Last name:</label>
        <input id="lname" disabled type="text" defaultValue={last_name} />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input id="emial" disabled type="text" defaultValue={email} />
      </div>
      <div>
        <label htmlFor="phone">Phone number:</label>
        <input id="phone" disabled type="text" defaultValue={phone_number} />
      </div>
      <div>
        <label htmlFor="age">Age</label>
        <input id="age" disabled type="text" defaultValue={age} />
      </div>
      <div>
        <label htmlFor="start">Reservation from:</label>
        <input id="start" disabled type="text" defaultValue={start_date} />
      </div>
      <div>
        <label htmlFor="end">Reservation to:</label>
        <input id="end" disabled type="text" defaultValue={end_date} />
      </div>
      <div>
        <label htmlFor="accessories">Accesories:</label>
        <input id="accessories" disabled type="text" defaultValue={accessories.join(", ")} />
      </div>
      <button type="submit">Go back</button>
    </FormWrapper>
  );
}

export async function loader({ params }) {
  const { data, error } = await await supabase
  .from('reservations')
  .select('*')
  .eq('id', params.id)
  .single()

  if (error) throw Error("Something went wrong");

  return data;
}
