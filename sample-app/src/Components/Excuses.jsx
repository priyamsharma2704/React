import {useState} from 'react';
function Excuses()
{
    //API LINK = https://excuser-three.vercel.app/
    
    
    // fetch("https://excuser-three.vercel.app/v1/excuse")
    // .then((res)=>{res.json().then((data)=>{console.log(data[0].excuse)})});

    const[excuse, setExcuse] = useState("");

    const handleExcuse = () =>
    {
        fetch("https://excuser-three.vercel.app/v1/excuse")
            .then((res)=>{res.json()        //to convert a response from an aPI to JSON
                .then((data)=>{             //the 2nd then is to convert the promise received into actual json response
                    setExcuse(data[0].excuse)
                })
            });
    }

    return(
        <>
        <h3>Excuse Generator!</h3>
            <button onClick={()=>{handleExcuse("Party")}}>Party</button>
            <button onClick={()=>{handleExcuse("Gaming")}}>Gaming</button>
            <button onClick={()=>{handleExcuse("Gaming")}}>Office</button>
            <p>{excuse}</p>
        </>
    );
}

export default Excuses;