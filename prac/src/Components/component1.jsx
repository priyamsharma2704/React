import {useEffect, useState} from 'react';
function Comp1()
{
    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchterm] = useState("");

    async function getUsers()
    {
        let resp = await fetch("https://reqres.in/api/users?");
        let data = await resp.json();
        setUsers(data.data);    
        console.log( data);
    }

    function handleOnChange(e)
    {
        let val = e.target.value;
        console.log(val);
        setSearchterm(val);
    }


    useEffect(() =>
    {
        console.log("------Component 1----------");
        getUsers();
    },[]);

    const filteredUsers = users.filter((user) => (user.first_name.includes(searchTerm)));


    return(
        <>
            Component 1

            USERS
            <ul>
                {filteredUsers.map((user) =>
                (
                    <li key={user.id}>{user.first_name}</li>
                ))}
            </ul>

            <input type="text" onChange={(e)=>handleOnChange(e)}></input>
        </>
    );
}

export default Comp1;