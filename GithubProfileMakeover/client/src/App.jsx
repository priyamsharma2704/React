import { useState } from "react";
import "./App.css";
import Form from "./Components/Form.jsx";
import ProfileStats from "./Components/ProfileStats.jsx";
import ProfileStreak from "./Components/ProfileStreak.jsx";
import ProfileChart from "./Components/ProfileChart.jsx";
function App() {
    const [step, setStep] = useState(0);
    const steps = [
        <Form></Form>,
        <ProfileStats></ProfileStats>,
        <ProfileStreak></ProfileStreak>,
        <ProfileChart></ProfileChart>,
    ];

    function handleNext() {
        if (step < steps.length - 1) setStep((prevStep) => prevStep + 1);
    }

    function handlePrev() {
        if (step > 0) setStep((prevStep) => prevStep - 1);
    }

    return (
        <>
            <span>
                {/* TODO:change this heading */}
                <h1> GitHub Profile Readme Generator </h1>
            </span>
            <div className="container">
                <div className="form">
                    {/* <Form></Form> */}
                    {steps[step]}
                </div>
                <div className="preview">
                    Preview
                    asdsadasd123131312312312asdasdasdasdasda1231221312312313asdasdasdasdadas
                </div>
            </div>
            <div className="navigation">
                <button onClick={handlePrev}>Prev</button>
                <button onClick={handleNext}>Next</button>
            </div>
        </>
    );
}

export default App;
