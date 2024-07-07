import { useState, useEffect } from "react";

function useDebouncer(value, delay)
{
    const [debouncerValue, setDebouncerValue] = useState(value);

    useEffect(()=>
    {
        const timer = setTimeout(()=>{
            setDebouncerValue(value);
        }, delay);

        return ()=>{
            clearInterval(timer);
        }
    },[value, delay]);

    return debouncerValue;

}

function Debouncer()
{
    const [input, setInput] = useState("");

    const debouncer = useDebouncer(input, 3000);

    function handleInput(e)
    {
        setInput(e.target.value);
    }

    return(
        <>
            <input type="text" onChange={(e)=>handleInput(e)}></input>
            <p>{debouncer}</p>
        </>
    )
}

export default Debouncer;