import FormWrapper from "../../components/Form/FormWrapper"

function ClientDataForm({firstName, lastName, email, phoneNumber, age, onUpdate})
{
    return (
        <FormWrapper>
            <input placeholder="first name" value={firstName} onChange={(e) => onUpdate({firstName: e.target.value})}/>
            <input placeholder="last name" value={lastName} onChange={(e) => onUpdate({lastName: e.target.value})}/>
            <input placeholder="email address"  value={email} onChange={(e) => onUpdate({email: e.target.value})}/>
            <input placeholder="phone number" value={phoneNumber} onChange={(e) => onUpdate({phoneNumber: e.target.value})}/>
            <select name="age" id="age" value={age} onChange={(e) => onUpdate({age: e.target.value})}>
                <option value="default" disabled hidden>Please select driver&apos;s age</option>
                <option value="18-20">18-20</option>
                <option value="21-24">21-24</option>
                <option value="25+">25+</option>
            </select>
        </FormWrapper>
    )
}

export default ClientDataForm