import {useState, useEffect} from "react";

function Search()
{
    const [ names, setNames] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    async function getUsers()
    {
        let resp = await fetch("https://reqres.in/api/users?");
        let data = await resp.json();
        //console.log(data);
        return data;
    }

    useEffect(()=>
    {
        async function getUsers2()
        {
            let usernames = await getUsers();
            console.log(usernames);

            let names = usernames.data.map((user,idx)=>{
                return user.first_name;
            });

        setNames(names);
        }
        getUsers2();
    },[]);

    function handleChange(e)
    {
        setSearchTerm(e.target.value);
    }

    const filterNames = names.filter((name)=>(name.toLowerCase().includes(searchTerm.toLowerCase())));

    return(
        <>
            <input type="text" placeholder="search" onChange={(e)=>handleChange(e)}/>
            <ul>
                {filterNames.map((f_name, idx)=>(
                    <li key={idx}>{f_name}</li>
                ))}
            </ul>
        </>
    );
}

export default Search;