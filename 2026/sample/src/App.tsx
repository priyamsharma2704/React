import { useState, useEffect } from "react";
import "./App.css";

const getData = async () => {
    const response = await fetch("https://dummyjson.com/users");
    const result = await response.json();
    return result;
};
function App() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const getData2 = async () => {
            //getData().then((data) => setData(data));
            //or
            const users = await getData();
            console.log(users.users);
            setData(users.users);
        };
        getData2();
    }, []);

    return (
        <>
            <div>
                {data.map((user, idx) => (
                    <div key={user.id}>
                        {user.id}. {user.firstName} {user.lastName}
                    </div>
                ))}
            </div>
        </>
    );
}

export default App;
