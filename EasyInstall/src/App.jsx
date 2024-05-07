import { useState } from "react";
import AppsLists from "./Components/AppsLists.jsx";
import Cart from './Components/Cart.jsx';


function App() {
    const [count, setCount] = useState(0);
    const [cartItems, setCartItems] = useState(0);

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
            <AppsLists setItemsInCart={setCartItems}></AppsLists>
        </div>

        </>
    );
}

export default App;
