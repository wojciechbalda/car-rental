import classes from './CarsFilterForm.module.css'
import FormWrapper from '../../components/Form/FormWrapper';
import { useState } from 'react';

function CarsFilterForm({onSearch})
{

    const [error, setError] = useState(null);

    function handleSearch(e)
    {
        e.preventDefault()
        setError(null)

        const formData = new FormData(e.currentTarget);

        const specificData = {
            "minPrice": formData.get("minPrice"),
            "maxPrice": formData.get("maxPrice"),
            "types": formData.getAll("carType"),
        }

        if (+specificData.minPrice < 0 || (specificData.maxPrice !== "" && +specificData.maxPrice < +specificData.minPrice))
            setError("Enter correct data")
        else 
            onSearch(specificData)
            
    }

    return (
        <FormWrapper onSubmit={handleSearch} className={classes.form}>  
            <input type="number" placeholder="minimal price" name="minPrice" />
            <input type="number" placeholder="maximal price" name="maxPrice" />
            <div className={classes.types}>
                <div>
                    <label>SUV
                        <input type="checkbox" name="carType" value="SUV" />
                    </label>
                </div>
                <div>
                    <label>Hatchback
                        <input type="checkbox" name="carType" value="hatchback"  />
                    </label>
                </div>
                <div>
                    <label>Sport car
                        <input type="checkbox" name="carType" value="sport car"/>
                    </label>
                </div>
                <div>
                    <label>Sedan
                        <input type="checkbox" name="carType" value="sedan" />
                    </label>
                </div>
            </div>
            {error && <p>Error: {error}</p>}
            <button type='submit'>Search</button>
        </FormWrapper>
    )
}

export default CarsFilterForm