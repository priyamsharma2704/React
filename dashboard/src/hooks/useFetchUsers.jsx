import React from "react";
import { useQuery } from "@tanstack/react-query";

const useFetchUsers = (url) => {
    console.log(url);
    const { isLoading, error, data } = useQuery({
        queryKey: ["users"],
        queryFn: () => fetch(url).then((resp) => resp.json()),
    });

    return { isLoading, error, data };
};

export default useFetchUsers;
