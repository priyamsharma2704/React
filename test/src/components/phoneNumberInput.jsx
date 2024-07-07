import { useState } from "react";
function phoneNumberInput()
{
    const [phone, setPhone] = useState();

    function handlePhoneInput(e)
    {
        let value = e.target.value;
        value = value.replace(/[^0-9]/g,"");


        if(value.length > 3  && value.length < 7)
            value = `(${value.slice(0,3)}) ${value.slice(3,6)}`;
        else if(value.length > 6)
            value = `(${value.slice(0,3)}) ${value.slice(3,6)}-${value.slice(6,10)}`;

        setPhone(value);
    }


    return(
        <>
        <input type="text" onChange={(e)=>{handlePhoneInput(e)}} value={phone}></input>
        <p>{phone}</p>
        </>
    )
}

export default phoneNumberInput;