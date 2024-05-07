import { useState } from "react";
//import './App.css'
import "./style.css";
import AppsLists from "./Components/AppsLists.jsx";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
        <div className="font-thin">hello</div>
        <div className="font-thin">hello</div>
        <div className="font-thin text-red-500">hello</div>
        <div className="container columns-2 mx-40">
            <input
            type="text"
            placeholder="Search..."
            className="rounded-md pl-3"
            ></input>
            <img className="mx-10" src="./assets/react.svg"></img>
        </div>
        <div className=" flex justify-center">
            <AppsLists></AppsLists>
        </div>
        </>
    );
}

export default App;
