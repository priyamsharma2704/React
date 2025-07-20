import "./App.css";
import { ThemeContext } from "./ThemeContext";
import { useState } from "react";
import ChildComp from "./Components/ChildComp1";
import ChildComp2 from "./Components/ChildComp2";
import { CounterContext } from "./CounterContext";
function App() {
    const [theme, setTheme] = useState("light");
    const [counter, setCounter] = useState(0);
    return (
        <>
            <ThemeContext.Provider value={{ theme, setTheme }}>
                <ChildComp></ChildComp>
            </ThemeContext.Provider>
            <CounterContext.Provider value={{ counter, setCounter }}>
                <ChildComp2></ChildComp2>
            </CounterContext.Provider>
        </>
    );
}

export default App;
