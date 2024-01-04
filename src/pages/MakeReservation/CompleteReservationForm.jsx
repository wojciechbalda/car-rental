import { useState } from "react"
import classes from './CompleteReservationForm.module.css'
import ClientDataForm from "./ClientDataForm"
import AccessoriesForm from "./AccessoriesForm"
import { useNavigate, useParams } from 'react-router-dom';
import { useSearchParams } from "react-router-dom";
import supabase from "../../config/supabase"

function CompleteResevationForm()
{
    const { carID } = useParams()
    const [searchParams] = useSearchParams();
    const navigate = useNavigate()

    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        age: "default",
        accessories: [],
        startDate: searchParams.get('startDate'),
        endDate: searchParams.get('endDate'),
        carID,
    })

    const updateFields = (field) => {
        setData(prevData =>  {return {...prevData, ...field}})
    }
    const forms = [<ClientDataForm key="client" onUpdate={updateFields} {...data} />, <AccessoriesForm key="accessories" onUpdate={updateFields} {...data} />]
    
    const [activeFormIndex, setActiveFormIndex] = useState(0)
    const isNextForm = activeFormIndex < forms.length - 1
    const isPreviousForm = activeFormIndex > 0 

    function handleGoBackToCarPage()
    {
        navigate(`/cars/${carID}/`)
    }

    function handleGoToPreviousForm()
    {
        setActiveFormIndex(prevState => prevState - 1)
    }

    function handleGoToNextForm()
    {
        setActiveFormIndex(prevState => prevState + 1)
    }

    async function handleMakeReservation()
    {

        if (!data.firstName || !data.lastName || !data.email || !data.age || !data.phoneNumber)
        {
            alert('Error, enter all required personal data')
            return 
        }

        const { error } = await supabase
        .from('reservations')
        .insert({first_name: data.firstName, 
            last_name: data.lastName,
            email: data.email,
            phone_number: data.phoneNumber,
            age: data.age,
            accessories: data.accessories,
            start_date: data.startDate,
            end_date: data.endDate,
            carID: data.carID})

        if (!error)
            navigate(`/cars/${carID}/success`)
    }

    return (
            <div className={classes['form-container']}>
                <div className={classes.steps}>
                    {forms.map((step, index) => 
                    {
                        return (
                            <div key={index} className={`${classes.circle} ${activeFormIndex === index ? classes.active : ""}`}>{index + 1}</div>
                        )
                    })}
                </div>
                {forms[activeFormIndex]}
                <div className={classes.btns}>
                    {!isPreviousForm && <button onClick={handleGoBackToCarPage}>Go back to the car page</button>}
                    {isPreviousForm && <button onClick={handleGoToPreviousForm}>Previous</button>}
                    {isNextForm && <button onClick={handleGoToNextForm}>Next</button>}
                    {!isNextForm && <button onClick={handleMakeReservation}>Reserve</button>}
                </div>
            </div>
    )
}

export default CompleteResevationForm