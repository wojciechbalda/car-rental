import { useState } from "react"

function useField(defaultValue, validationCallback)
{
    const [value, setValue] = useState(defaultValue)
    const [isTouched, setIsTouched] = useState(false)
    const isInvalid = isTouched && !(validationCallback(value))

    return {
        value,
        setValue,
        isInvalid,
        setIsTouched,
    }
}

export default useField