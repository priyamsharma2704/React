import {useState, useEffect} from 'react';

function Cornerstone()
{
    const [names, setNames] = useState([]);
    const [searchTerm,setSearchTerm] = useState("");

    const url = "https://randomuser.me/api/?results=10";
    const getData = async() =>
    {
        let resp = await fetch(url);
        let data = await resp.json();

        let names = data.results.map((result,idx)=>{
            return result.name.first;
        });
        return names;
    }

    function handleChange(e)
    {
        setSearchTerm(e.target.value);
    }

    let filteredNames = names.filter((name)=>name.toLowerCase().includes(searchTerm.toLowerCase()));

    useEffect(()=>
    {
       async function getNames()
       {
            let names = await getData();
            console.log(names);
            setNames(names);
       }
       getNames();
    },[]);

    return(
        <>
            <input type="text" placeholder='search' onChange={(e)=>handleChange(e)} />

            <ul>
                {filteredNames.map((name,idx)=>(
                    <li key={idx}>{name}</li>
                ))}
            </ul>
        </>
    );
}

export default Cornerstone;