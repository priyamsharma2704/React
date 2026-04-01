/*
Tasks:

1. Add numbers to list
2. Show sum and average
3. Optimize using useMemo
*/

import React, { useState } from "react";

export default function App() {
    const [numbers, setNumbers] = useState([]);
    const [input, setInput] = useState("");

    return (
        <div>
            <input type="number" />
            <button>Add</button>

            <ul>{/* Numbers */}</ul>

            <div>Sum: {/* Task */}</div>
            <div>Average: {/* Task */}</div>
        </div>
    );
}
