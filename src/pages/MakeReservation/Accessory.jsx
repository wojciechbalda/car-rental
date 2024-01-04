
import classes from './Accessory.module.css'

function Accessory({service, serviceDescription, price, serviceValue, accessories, onUpdate, icon})
{

    function handleUpdateArray()
    {
        if (accessories.includes(serviceValue))
        {
            const currentAccessories = [...accessories];
            currentAccessories.splice(currentAccessories.indexOf(serviceValue),1)
            onUpdate({accessories: currentAccessories})
        }
        else 
        {
            onUpdate({accessories: [...accessories, serviceValue]})
        }
    }

    return (
        <div className={classes.accessory}>
            <div className={classes.icon}>
                {icon}
            </div>
            <div>
                <h3>{service}</h3>
                <p>{serviceDescription}</p>
            </div>
            <div className={classes.details}>
                <p>{price} PLN</p>
                <label>Wybieram <input type="checkbox" value={serviceValue} onClick={handleUpdateArray} defaultChecked={accessories.includes(serviceValue)} /></label>
            </div>
        </div>
    )
}

export default Accessory