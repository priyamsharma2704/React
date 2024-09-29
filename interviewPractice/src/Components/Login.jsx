import {useState, useEffect} from 'react';

function Login()
{

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [users, setUsers] = useState([]);
    const [status, setStatus] = useState(false);

    function handleUsernameChange(e)
    {
        setUsername(e.target.value);
    }

    function handlePasswordChange(e)
    {
        setPassword(e.target.value);
    }

    function handleLogin()
    {
        let s_users = sessionStorage.getItem("users");
        let users = JSON.parse(s_users);

        let dup_user = false;
        users.filter((user)=>{
            if(user.username == username)
                dup_user = true;
        })

        if(dup_user)
            alert("User already exists");
        else
        {
            let curr_user = {username, password};
            setUsers([...users, curr_user]);
            setStatus(true);
        }

        setUsername("");
        setPassword("");
    }

    useEffect(()=>
    {
        sessionStorage.setItem("users", JSON.stringify(users));
    },[users]);
    
    return(
        <>
            <hr></hr>

            <div><input type="text" placeholder='username' onChange={(e)=>handleUsernameChange(e)} value={username}/></div>
            <div><input type="text" placeholder='password' onChange={(e)=>handlePasswordChange(e)} value={password}/></div>
            <div><input type="button" value="Login" onClick={handleLogin}/></div>
            {status ? <span>{username} has logged in!</span> : <></>}
        </>
    );
}

export default Login;