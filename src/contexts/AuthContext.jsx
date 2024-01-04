import { createContext, useEffect, useState } from "react";
import supabase from "../config/supabase";

export const AuthContext = createContext({isUserLoggedIn: false})

const AuthContextProvider = ({children}) => {
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

    useEffect(() => {
        const setContextValue = async () => {
            const session = await supabase.auth.getSession()
            setIsUserLoggedIn(!!session)
        } 
        setContextValue()
    }, [])

    return <AuthContext.Provider value={{isUserLoggedIn, setIsUserLoggedIn}}>
        {children}
    </AuthContext.Provider>
}

export default AuthContextProvider