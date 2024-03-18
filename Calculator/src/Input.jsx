import React,{useState} from 'react';
function Input({inputStr})
{
    const [exp, setExp] = useState("");
    return (
        <>
            <input type="text" value={inputStr}></input>
        </>
    );
}

export default Input;