import React from "react";
import { useState, useEffect } from "react";

//URL 'https://dummyjson.com/users');

const getUsers = async () => {
    const resp = await fetch("https://dummyjson.com/users");
    const users = await resp.json();
    return users;
};
const Ansys = () => {
    const [names, setNames] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        getUsers().then((data) => {
            const users = data.users.map((user, idx) => {
                return user.firstName;
            });

            console.log(users);
            setNames(users);
        });
    }, []);

    const handleOnChange = (val) => {
        // console.log(val);
        setSearchTerm(val);
    };

    const filteredNames = names.filter((name) => {
        return name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return (
        <div>
            <input
                type="search"
                onChange={(e) => handleOnChange(e.target.value)}
            />
            <ul>
                {filteredNames.map((name, idx) => (
                    <li key={idx}>{name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Ansys;
