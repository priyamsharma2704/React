/*
Tasks:

1. Add todo
2. Mark as completed
3. Filter (All / Completed / Pending)
4. Show remaining count
*/

import React, { useState } from "react";

export default function App() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");
    const [filter, setFilter] = useState("all");

    return (
        <div>
            <input placeholder="Add todo" />
            <button>Add</button>

            <div>
                <button>All</button>
                <button>Completed</button>
                <button>Pending</button>
            </div>

            <ul>{/* Render todos */}</ul>

            <div>Remaining: {/* Task */}</div>
        </div>
    );
}
