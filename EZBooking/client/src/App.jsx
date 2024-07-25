import { useState, useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'

function App()
{
    const getData = async() =>
    {
        let resp = await fetch('http://localhost:4000/api');
        let data = await resp.json();
        
        //return the data and set the state in the UseEffect hook.
        return data;
    }

    const getData2 = async() =>
    {
        let resp = await fetch('http://localhost:4000/api');
        let data = await resp.json();

        console.log(data);

        //set the state here itself
    }

    console.log("use effect");

    useEffect(()=>{
       getData().then((resp)=>console.log(resp));

       getData2(); // here we dont need to do anything after calling getData2 as state will be set in getData2()
    });

    return(
        <>
        App
        </>
    )
}

export default App;
