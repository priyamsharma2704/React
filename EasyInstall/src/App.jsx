import { useState } from "react";
import AppsLists from "./Components/AppsLists.jsx";
import Cart from './Components/Cart.jsx';


function App() {
    const [count, setCount] = useState(0);

    return (
        <>
        <div className="">
            <input
            type="text"
            placeholder="Search..."
            className="">
            </input>
            <Cart className=""></Cart>
        </div>
        <div className="">
            <AppsLists></AppsLists>
        </div>

        </>
    );
}

export default App;
