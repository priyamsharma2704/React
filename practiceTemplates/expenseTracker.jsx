/*
Tasks:

1. Add new expense (name + amount)
2. Display list of expenses
3. Calculate total expense
4. Add budget input
5. Show warning if total exceeds budget
*/

import React, { useState } from "react";

export default function App() {
    const [expenses, setExpenses] = useState([]);
    const [name, setName] = useState("");
    const [amount, setAmount] = useState("");
    const [budget, setBudget] = useState("");

    return (
        <div>
            <input placeholder="Name" />
            <input placeholder="Amount" type="number" />
            <button>Add</button>

            <div>{/* List expenses */}</div>

            <div>Total: {/* Task */}</div>

            <input placeholder="Budget" type="number" />

            {/* Show warning */}
        </div>
    );
}
