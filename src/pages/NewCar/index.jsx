import { useNavigate } from "react-router-dom";
import CarForm from "../../components/CarForm/CarForm";
import ContentContainer from "../../components/UI/ContentContainer";
import supabase from "../../config/supabase";

export function Component() 
{
    const navigate = useNavigate();
    async function handleUpdate(data)
    {
        const {error} = await supabase
        .from('cars')
        .insert([data])
        .select()


        if (error)
            throw new Error("Something went wrong")

        navigate(-1)
    }

    return <ContentContainer>
    <h1>Edit the car</h1>
    <CarForm submitButtonText="Add" onSubmit={handleUpdate} />
</ContentContainer>
}

