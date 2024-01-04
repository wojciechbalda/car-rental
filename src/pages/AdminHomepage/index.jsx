import { useLoaderData } from "react-router-dom"
import supabase from "../../config/supabase"
import classes from './WelcomeAdminPage.module.css'

export function Component()
{
    const user = useLoaderData()
    const info = new Date(user.last_sign_in_at)

    return (
        <>
            <h1 className={classes["welcome-message"]}>Witamy ponownie!</h1>
            <p className={classes["last-sign-in-info"]}>Zalogowano: {new Intl.DateTimeFormat("en-GB", { year: 'numeric',month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'}).format(info)}</p>
        </>
    )
}

export async function loader()
{
    const {data, err} = await supabase.auth.getSession()
    if (err)
       throw Error("Something went wrong")
    const user = data.session.user
    return user
}