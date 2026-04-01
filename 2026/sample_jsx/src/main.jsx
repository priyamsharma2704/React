import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ShoppingCart from "./ShoppingCart.jsx";
import ShoppingCart2 from "./ShoppingCart2.jsx";
import Stocks from "./Stocks.jsx";
import SumAndAvg from "./Sum&avg.jsx";
import SearchFilter from "./SearchFilter.jsx";
import UndoRedo from "./UndoRedo.jsx";
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
        <br></br>
        <h2>SumAndAvg</h2>
        <SumAndAvg />
        <br></br>
        <h2>SearchFilter</h2>
        <SearchFilter />
        <br></br>
        <h2>UndoRedo</h2>
        <UndoRedo />
    </StrictMode>,
);
