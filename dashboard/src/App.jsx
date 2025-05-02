import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/Navbar";
import Users from "./pages/users";
import Products from "./pages/products";
import Feeds from "./pages/feeds";

function App() {
    return (
        <>
            <NavBar></NavBar>
            <Routes>
                <Route path="/" element={<Users></Users>}></Route>
                <Route path="/products" element={<Products></Products>}></Route>
                <Route path="/feeds" element={<Feeds></Feeds>}></Route>
            </Routes>
        </>
    );
}

export default App;
