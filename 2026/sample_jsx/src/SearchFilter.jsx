/*
Tasks:

1. Filter list based on search input
2. Case insensitive search
*/

import React, { useState } from "react";

const users = ["Alice", "Bob", "Charlie", "David"];

export default function SearchFilter() {
    const [search, setSearch] = useState("");

    function handleSearch(value) {
        setSearch(value);
    }
    var filteredUsers = users.filter((user) => {
        return user.toLowerCase().includes(search.toLowerCase());
    });
    return (
        <div>
            <input
                placeholder="Search users"
                onChange={(e) => handleSearch(e.target.value)}
            />

            <ul>
                {filteredUsers.map((user, idx) => (
                    <li key={idx}>{user}</li>
                ))}
            </ul>
        </div>
    );
}
