import { useState } from "react";
import "./App.css";
import LeftPane from "./Components/LeftPane";
import RightPane from "./Components/RightPane";

function App() {
    return (
        <div className="sps-shell">
            <LeftPane />
            <RightPane />
        </div>
    );
}

export default App;
