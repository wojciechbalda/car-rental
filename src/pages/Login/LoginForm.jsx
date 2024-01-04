import { useNavigate } from "react-router-dom";
import supabase from "../../config/supabase";
import useField from "../../hooks/useField";
import classes from "./LogInForm.module.css";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

function LoginForm() {

  const navigate = useNavigate();
  const { setIsUserLoggedIn } = useContext(AuthContext)

  const {
    value: email,
    setValue: setEmail,
    isInvalid: isEmailInvalid,
    setIsTouched: setIsEmailTouched,
  } = useField("",(value) => value.includes('@'));
  
  const {
    value: password,
    setValue: setPassword,
    isInvalid: isPasswordInvalid,
    setIsTouched: setIsPasswordTouched,
  } = useField("",  (value) => value.length >= 4);


  const handleSignIn = async (e) => 
    {
      e.preventDefault()
        const {data} = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        })
        if (data)
        {
          setIsUserLoggedIn(true)
          navigate('/admin')
        }
    }

  return (
    <form onSubmit={handleSignIn} className={classes.form}>
      <div>
        <label htmlFor="email">email:</label>
        <input
          placeholder="User's email must include @"
          id="email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => setIsEmailTouched(true)}
        />
        <p></p>
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          placeholder="User's password must have mininum 4 signs"
          id="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onBlur={() => setIsPasswordTouched(true)}
          />
      </div>
      <button
        disabled={
          isPasswordInvalid || isEmailInvalid || !email || !password
        }
        >
        Continue
      </button>
    </form>
  );
}

export default LoginForm;
