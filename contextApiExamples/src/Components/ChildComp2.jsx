import { useContext } from "react";
import { CounterContext } from "../CounterContext";

const ChildComp2 = () => {
    const { counter, setCounter } = useContext(CounterContext);

    const handleInc = () => {
        setCounter((prevCounter) => prevCounter + 1);
    };

    const handleDec = () => {
        if (counter > 0) setCounter((prevCounter) => prevCounter - 1);
    };

    return (
        <>
            {counter}
            <button onClick={handleInc}>Inc</button>
            <button onClick={handleDec}>Dec</button>
        </>
    );
};

export default ChildComp2;
