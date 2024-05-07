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
            <button
          type="button"
          className="inline-flex items-center px-1 py-1 text-sm font-light text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Cart
          <span className="inline-flex items-center justify-center w-4 h-4 ms-2 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">
            2
          </span>
        </button>
        </div>
        <div className=" flex justify-center">
            <AppsLists></AppsLists>
        </div>
        </>
    );
}

export default App;
