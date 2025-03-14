import { useState } from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import Inward from "./pages/Inward";
import Outward from "./pages/Outward";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <>
            <div className="container">
                <NavBar></NavBar>
            </div>

            <Routes>
                <Route path="inward" element={<Inward></Inward>}></Route>
                <Route path="outward" element={<Outward></Outward>}></Route>
            </Routes>
        </>
    );
}

export default App;
