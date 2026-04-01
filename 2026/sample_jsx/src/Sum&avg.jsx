/*
Tasks:

1. Add numbers to list
2. Show sum and average
3. Optimize using useMemo
*/

import React, { useState, useMemo } from "react";

export default function SumAndAvg() {
    const [numbers, setNumbers] = useState([]);
    const [input, setInput] = useState("");

    var sum = useMemo(() => {
        return numbers.reduce((sum, num) => {
            return sum + parseInt(num);
        }, 0);
    }, [numbers]);

    var avg = useMemo(() => {
        return sum / numbers.length;
    }, [numbers]);
    function handleInputChange(value) {
        setInput(value);
    }

    function handleAddBtn() {
        setNumbers((prevNumbers) => [...prevNumbers, input]);
    }
    return (
        <div>
            <input
                type="number"
                onChange={(e) => handleInputChange(e.target.value)}
            />
            <button onClick={handleAddBtn}>Add</button>

            <ul>
                {numbers.map((num, idx) => (
                    <li key={idx}>{num}</li>
                ))}
            </ul>

            <div>Sum: {sum}</div>
            <div>Average: {avg}</div>
        </div>
    );
}
