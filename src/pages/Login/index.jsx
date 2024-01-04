import { Link, redirect } from "react-router-dom"
import LoginForm from "./LoginForm"
import classes from './Page.module.css'
import supabase from "../../config/supabase"


export function Component()
{
    return (
        <div className={classes.box}>
            <h1>Log in</h1>
            <p>Demo application (Enter &quot;wojciech@example.pl&quot; as email and &quot;12345678&quot; as password to log in)</p>
            <LoginForm />
            <p><Link className={classes.link} to="/">Go to the Homepage</Link></p>
        </div>
    )
}


export const loader = async () => {
    const {data} = await supabase.auth.getSession()

    if (data.session)
        return redirect('/admin');
    return null
}