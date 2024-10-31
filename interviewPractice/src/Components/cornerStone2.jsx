import {useState, useEffect} from 'react';
function Cornerstone2()
{
    const url = "https://randomuser.me/api/?results=10";

    const [names, setNames] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    async function getData()
    {
        let resp = await fetch(url);
        let data = await resp.json();
        console.log(data.results);

        let names = data.results.map((result)=>
        {
            return result.name.first;
        });

        return names;
    }

    function handleSearch(e)
    {
        setSearchTerm(e.target.value);
    }

    let filteredNames = names.filter((name) =>(name.toLowerCase().includes(searchTerm.toLowerCase())));

    useEffect(()=>
    {
        //getData().then((console.log("reslved")))

        async function getNames()
        {
            let names = await getData();
            //console.log(names);
            setNames(names);
        }

        getNames();
    },[]);

    return(
        <>
            <input type="text" placeholder='search...' onChange={(e)=>handleSearch(e)} />
            <ul>
                {filteredNames.map((name, idx)=>
                (
                    <li key={idx}>{name}</li>
                ))}
            </ul>
        </>
    );
}

export default Cornerstone2;