import { useState, useEffect } from "react";

function useDebounce(value, delay)
{
    const [debounceValue, setDebounceValue] = useState(value);

    useEffect(()=>
    {
        const timer = setTimeout(()=>{
            setDebounceValue(value);
        }, delay);

        return  ()=>{
            clearTimeout(timer);
        }
    },[value, value]);
    return debounceValue;

}


function App()
{
    const [searchTerm, setSearchTerm] = useState("");
    const debouncedTerm = useDebounce(searchTerm, 3000);
    function handleSearchInput(e)
    {
        setSearchTerm(e.target.value);
    }
    return(
        <>
            <input type="text" onChange={(e)=>handleSearchInput(e)}></input>
            <p>{debouncedTerm}</p>
        </>
    );
}

export default App;