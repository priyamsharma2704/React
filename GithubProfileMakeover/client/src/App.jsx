import { useState } from "react";
import "./App.css";
import Form from "./Components/Form.jsx";
import ProfileStats from "./Components/ProfileStats.jsx";
import ProfileStreak from "./Components/ProfileStreak.jsx";
import ProfileChart from "./Components/ProfileChart.jsx";
import Preview from "./Components/Preview.jsx";
function App() {
    const [step, setStep] = useState(0);
    const [formData, setformData] = useState({});
    const [profileStats, setProfileStats] = useState({});
    const [profileStreak, setProfileStreak] = useState({});
    const [profileChart, setProfileChart] = useState({});

    const steps = [
        {
            component: <Form data={formData} setData={setformData}></Form>,
            preview: formData,
        },
        {
            component: (
                <ProfileStats
                    data={profileStats}
                    setData={setProfileStats}
                ></ProfileStats>
            ),
            preview: profileStats,
        },
        {
            component: (
                <ProfileStreak
                    data={profileStreak}
                    setData={setProfileStreak}
                ></ProfileStreak>
            ),
            preview: profileStreak,
        },
        {
            component: (
                <ProfileChart
                    data={profileChart}
                    setData={setProfileChart}
                ></ProfileChart>
            ),
            preview: profileChart,
        },
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
                <div className="form">{steps[step].component}</div>
                <div className="preview">
                    <Preview
                        stepNum={step}
                        data={steps[step].preview}
                    ></Preview>
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
