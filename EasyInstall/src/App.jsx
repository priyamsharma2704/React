import { useState, useEffect } from "react";
import "./App.css"
import AppsLists from "./Components/AppsLists.jsx";
import CartBadge from './Components/CartBadge.jsx';
import Cart from './Components/Cart.jsx';
import {Link} from 'react-router-dom';
function App()
{
    const [appsList, setAppsList] = useState([]);
    const [cartItems, setCartItems] = useState(0);

    useEffect(()=>{
        console.log(appsList);
    },[appsList]);

    return (
        <>
        <div className="">
            <input
            type="text"
            placeholder="Search..."
            className="">
            </input>
            <Link to='/Cart' state={{apps:appsList, cart:cartItems}}><CartBadge className="" itemsCount={cartItems}></CartBadge></Link>
        </div>
        <div>
            <input type="radio" name="Linux" value="Linux"/>Linux
            <input type="radio" name="Linux" value="Linux" defaultChecked/>Windows
        </div>
        <div className="">
            <AppsLists setItemsInCart={setCartItems} setApps={setAppsList}></AppsLists>
        </div>

        </>
    );
}

export default App;
