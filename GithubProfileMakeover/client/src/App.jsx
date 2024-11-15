import { useState } from "react";
import "./App.css";
import Form from "./Components/Form.jsx";
import ProfileStats from "./Components/ProfileStats.jsx";
import ProfileStreak from "./Components/ProfileStreak.jsx";
import ProfileChart from "./Components/ProfileChart.jsx";
import Preview from "./Components/Preview.jsx";
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
                <h1> GitHub Profile Readme Generator </h1>
            </span>
            <div className="container">
                <div className="form">{steps[step]}</div>
                <div className="preview">
                    <Preview></Preview>
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
