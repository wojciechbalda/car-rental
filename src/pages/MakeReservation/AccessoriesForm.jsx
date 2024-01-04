import Accessory from "./Accessory"
import FormWrapper from "../../components/Form/FormWrapper"
import { BsFillFuelPumpFill } from "react-icons/bs";
import { BsFillCreditCardFill } from "react-icons/bs";
import { MdLocalCarWash } from "react-icons/md";

function AccessoriesForm({accessories, onUpdate})
{
    return (
        <FormWrapper>
            <Accessory icon={<BsFillCreditCardFill />} accessories={accessories} onUpdate={onUpdate} service="Bez kaucji!" price="123.00" serviceValue="kaucja" serviceDescription="Standardowo pobieramy 3000 zł kaucji, która jest zwracana po wynajmie. Za pomocą tego dodatku zniesiesz obowiązek pozostawienia kaucji." />
            <Accessory icon={<BsFillFuelPumpFill />} accessories={accessories} onUpdate={onUpdate} service="Pełny bak paliwa" price="615.00" serviceValue="paliwo" serviceDescription="Nie martw się o tankowanie! Dostajesz samochód z pełnym bakiem paliwa, a możesz zwrócić z pustym - oczywiście w granicach rozsądku, tak abyśmy dojechali do stacji :)" />
            <Accessory icon={<MdLocalCarWash />} accessories={accessories} onUpdate={onUpdate} service="Pakiet mycia" price="199.00" serviceValue="mycie" serviceDescription="Mycie pojazdu po wynajmie. W przypadku wyboru tego pakietu protokół zwrotu jest wypełniany po umyciu pojazdu." />
        </FormWrapper>
    )
}

export default AccessoriesForm