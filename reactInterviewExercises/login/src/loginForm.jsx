import { useState } from 'react'
import { login } from "./utils";
import "./styles.css";

// ================ LOGIN FORM ====================
// 
// Guidelines:
// * You have an incomplete login form.
// * You are not allowed to add any additional HTML elements.
// * You are not allowed to use refs.
//
// Tasks:
//  * The login button should trigger the login() action imported above and pass required data to it.
//  * Disable the Login button if email is blank OR if password is under 6 letters
//  * Disable the Login button while login action is being performed
//  * Show an error message from the login() if login fails. The error should be cleared every time user re-attempts to log in.
//  * Show an alert box (native Javascript alert) if login succeeds. Investigate the login function to find out how to log in successfully.

export default function LoginForm() 
{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
<<<<<<< HEAD
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
 
=======
    const [loading, setLoading] = useState(false);
    function handleEmailChange(e)
    {
        setEmail(e.target.value);
    }

>>>>>>> origin/main
    function handlePasswordChange(e)
    {
        setPassword(e.target.value);
    }

<<<<<<< HEAD
    function handleEmailChange(e)
    {
        setEmail(e.target.value);
    }

=======
>>>>>>> origin/main
    async function handleLogin()
    {
        setLoading(true);
        try{
<<<<<<< HEAD
            login({email,password}).then(()=>setIsLoading(false)).catch((e)=>setError(e.message));
            //await login({email,password});
            //setIsLoading(false);
            
        }
        catch(error)
        {
            console.log("failed")
            setError(error.message);
            setIsLoading(false);
        }
    }

    let x = isLoading;
    //console.log(x);
    let isDisabled = !email || password.length < 6 || isLoading?true:false;

    return (
        <div className="wrapper">
        <div className="row">
            <label htmlFor={"email"}>Email</label>
            <input id={"email"} type={"email"} onChange={(e)=>handleEmailChange(e)}/>
        </div>
        <div className="row">
            <label htmlFor={"password"}>Password</label>
            <input id={"password"} type={"password"} onChange={(e)=>handlePasswordChange(e)}/>
        </div>
=======
            login({email, password});
            setLoading(false);
        }
        catch{
            setLoading(false);
        }
    }

    let isDisabled = !email || password.length < 6 || loading ? true : false;

  return (
    <div className="wrapper">
      <div className="row">
        <label htmlFor={"email"}>Email</label>
        <input id={"email"} type={"email"} onChange={(e)=>handleEmailChange(e)}/>
      </div>
      <div className="row">
        <label htmlFor={"password"}>Password</label>
        <input id={"password"} type={"password"} onChange={(e)=>handlePasswordChange(e)}/>
      </div>
>>>>>>> origin/main

      {/* Place login error inside this div. Show the div ONLY if there are login errors. */}
      <div className="errorMessage"></div>

<<<<<<< HEAD
        <div className="button">
            <button onClick={handleLogin} disabled={isDisabled}>Login</button>
        </div>
        </div>
    );
}
=======
      <div className="button">
        <button onClick={handleLogin} disabled={isDisabled}>Login</button>
      </div>
    </div>
  );
}
>>>>>>> origin/main
