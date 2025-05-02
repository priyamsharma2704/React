import React from "react";
import { useState, useEffect } from "react";
const Hook = () => {
    const [val, setVal] = useState(0);

    /*
    1. when useEffect is used without any depenedency arr, it will be rendered everytime the component renders
    2. when the depen arr is empty, the useEffect will be called only once after the initial render.
    3. when depen arr is not empty, useEffect will be called everytime after the initial render whenever that dependency changes.

    Note: the passed dependecy can be a state, props, a local var, or a funtion  reference.
     */
    useEffect(() => {
        console.log("useEffect called");
    });
    const handleClick = () => {
        setVal((prevVal) => prevVal + 1);
    };

    return (
        <>
            <button onClick={handleClick}>{val}</button>
        </>
    );
};

export default Hook;
