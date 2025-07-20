import React from "react";
import { ThemeContext } from "../ThemeContext";
import { useContext } from "react";
const ChildComp1 = () => {
    const { theme, setTheme } = useContext(ThemeContext);
    const handleOnClick = () => {
        setTheme(() => {
            return theme === "light" ? "dark" : "light";
        });
    };
    return (
        <>
            <div
                style={{
                    width: "100px",
                    height: "100px",
                    border: "1px dotted black",
                    background: theme === "light" ? "#333" : "#fff",
                    color: theme === "light" ? "white" : "black",
                }}
            >
                <span>{theme}</span>
                <button onClick={handleOnClick}>Toggle</button>
            </div>
        </>
    );
};

export default ChildComp1;
