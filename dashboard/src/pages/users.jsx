import React from "react";
import useFetchUsers from "../hooks/useFetchUsers";
const Users = () => {
    const { isLoading, error, data } = useFetchUsers(
        "https://dummyjson.com/users"
    );
    console.log({ isLoading, error, data });

    return <div>users</div>;
};

export default Users;
