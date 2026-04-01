import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ShoppingCart from "./ShoppingCart.jsx";
import ShoppingCart2 from "./ShoppingCart2.jsx";
import Stocks from "./stocks.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <h2>ShoppingCart</h2>
        <ShoppingCart />
        <br></br>
        <h2>ShoppingCart2</h2>
        <ShoppingCart2 />
        <br></br>
        <h2>Stocks</h2>
        <Stocks />
    </StrictMode>,
);
