import { useState } from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import Page from "./Components/Page";
import Inward from "./pages/Inward";

/*
1. Implement Routing in this file
2. After implementing the Routing, remove Inward from here
 */
function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div className="container">
                <NavBar></NavBar>
                <Page></Page>
                <Inward></Inward>
            </div>
        </>
    );
}

export default App;
