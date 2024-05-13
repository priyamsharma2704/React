import { useState, useEffect } from "react";
import "./App.css"
import AppsLists from "./Components/AppsLists.jsx";
import CartBadge from './Components/CartBadge.jsx';
import Cart from './Components/Cart.jsx';
import {Link} from 'react-router-dom';

function App()
{
    return (
        <>
        <div className="">
            <input
            type="text"
            placeholder="Search..."
            className="">
            </input>
            <Link to='/Cart' ><CartBadge className="" ></CartBadge></Link>
        </div>
        <div>
            <input type="radio" name="Linux" value="Linux"/>Linux
            <input type="radio" name="Linux" value="Linux" defaultChecked/>Windows
        </div>
        <div className="">
            <AppsLists></AppsLists>
        </div>
        </>
    );
}

export default App;
