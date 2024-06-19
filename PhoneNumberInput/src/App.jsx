/*
    Number only input
    Add brackets around 1st three nummbers.
    Add '-' after the 3rd and 6th digit.
*/
import { useState, useEffect } from "react";
function App()
{
    const [phoneNumber, setPhoneNumber] = useState();

    function handleInput(e)
    {
        let value = e.target.value;

        value = value.replace(/[^0-9]/g,"");
        // Format the phone number
        if (value.length > 3 && value.length <= 6) 
        {
            value = `(${value.slice(0, 3)}) ${value.slice(3)}`;
        } 
        else if (value.length > 6) 
        {
            value = `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6,10)}`;
        }
        setPhoneNumber(value);
    }
    return(
        <>
           <input
            type="text"
            value={phoneNumber}
            placeholder="Enter the phone number"
            onChange={(e)=>handleInput(e)}
           ></input>
        </>
    )
}

export default App;