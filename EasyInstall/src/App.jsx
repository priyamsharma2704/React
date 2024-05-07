import { useState, useEffect } from "react";
import "./App.css"
import AppsLists from "./Components/AppsLists.jsx";
import Cart from './Components/Cart.jsx';

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
            <Cart className="" items={cartItems}></Cart>
        </div>
        <div className="">
            <AppsLists setItemsInCart={setCartItems} setApps={setAppsList}></AppsLists>
        </div>

        </>
    );
}

export default App;
