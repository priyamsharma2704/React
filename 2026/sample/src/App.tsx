import { useState, useEffect } from "react";
import "./App.css";

const getData = async () => {
    const response = await fetch("http://localhost:5000/");
    const result = await response.json();
    return result;
};
function App() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const getData2 = async () => {
            //getData().then((data) => setData(data));
            //or
            const resp = await getData();
            setData(resp);
        };
        getData2();
    }, []);

    return (
        <>
            asd<div>{JSON.stringify(data)}</div>
        </>
    );
}

export default App;
