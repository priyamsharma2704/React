/*
Tasks:

1. Filter list based on search input
2. Case insensitive search
*/

import React, { useState } from "react";

const users = ["Alice", "Bob", "Charlie", "David"];

export default function App() {
    const [search, setSearch] = useState("");

    return (
        <div>
            <input placeholder="Search users" />

            <ul>{/* Filtered list */}</ul>
        </div>
    );
}
