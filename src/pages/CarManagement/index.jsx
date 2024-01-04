import Cars from "../../components/Cars/Cars";

import supabase from "../../config/supabase";
import AddButton from "./AddButton";
import { useLoaderData, useRevalidator } from "react-router-dom";

export function Component() {
  const cars = useLoaderData()
  const revalidator =  useRevalidator();

  async function handleDeleteCar(id) 
  {
    const { error } = await supabase
    .from('cars')
    .delete()
    .eq('id', id);

    if (error)
        throw new Error("Something went wrong")
    
    revalidator.revalidate()
  }

  return (
    <>
      <AddButton />
      <Cars onDelete={handleDeleteCar} data={cars} isEditable />
    </>
  );
}


export async function loader() {
  const { data, error } = await supabase.from("cars").select();
  if (error) throw Error("Something went wrong");
  return data;
}
