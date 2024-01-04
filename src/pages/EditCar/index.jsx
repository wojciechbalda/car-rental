import { useLoaderData, useNavigate } from "react-router-dom"
import supabase from "../../config/supabase"
import ContentContainer from "../../components/UI/ContentContainer";
import CarForm from "../../components/CarForm/CarForm";

export function Component() {

    const data = useLoaderData();
    const navigate =  useNavigate()

    async function handleUpdate(newData) 
    {
      const {error} = await supabase.from('cars').update(newData).eq("id", data.id).select()

      if (error)
        throw Error("Something went wrong")
        
      navigate(-1)
    }

    return <ContentContainer>
        <h1>Edit the car</h1>
        <CarForm submitButtonText="Update" carData={data} onSubmit={handleUpdate} />
    </ContentContainer>
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