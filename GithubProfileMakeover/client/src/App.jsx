import { useState } from "react";
import "./App.css";
import Form from "./Components/Form.jsx";
import ProfileStats from "./Components/ProfileStats.jsx";
import ProfileStreak from "./Components/ProfileStreak.jsx";
import ProfileLanguageCard from "./Components/ProfileLanguageCard.jsx";
import Preview from "./Components/Preview.jsx";
import ProfilePreview from "./Components/ProfilePreview.jsx";

function App() {
    const [step, setStep] = useState(0);
    const [formData, setformData] = useState({});
    const [profileStats, setProfileStats] = useState({});
    const [profileStreak, setProfileStreak] = useState({});
    const [profileLanguageCard, setProfileLanguageCard] = useState({});
    const [skills, setSkills] = useState({});

    const [languageCardLayout, setLanguageCardLayout] = useState("compact");
    const [hideProgressBars, setHideProgressBars] = useState(false);

    const [profileStreakTheme, setProfileStreakTheme] = useState("default");
    const [hideBorderChecked, setHideBorderChecked] = useState(true);

    const [individualStatsChecked, setIndividualStatsChecked] = useState(true);
    const [additionalStatsChecked, setAdditionalStatsChecked] = useState(true);
    const [hideIconsChecked, setHideIconsChecked] = useState(false);
    const [theme, setTheme] = useState("default");

    const [generatePreview, setGeneratePreview] = useState(false);

    const steps = [
        {
            component: (
                <Form
                    data={formData}
                    setData={setformData}
                    selectedSkills={skills}
                    setSelectedSkills={setSkills}
                ></Form>
            ),
            preview: formData,
        },
        {
            component: (
                <ProfileStats
                    formData={formData}
                    data={profileStats}
                    setData={setProfileStats}
                    isIndividualStatsChecked={individualStatsChecked}
                    setIsIndividualStatsChecked={setIndividualStatsChecked}
                    isAdditionalStatsChecked={additionalStatsChecked}
                    setIsAdditionalStatsChecked={setAdditionalStatsChecked}
                    isHideIconsChecked={hideIconsChecked}
                    setIsHideIconsChecked={setHideIconsChecked}
                    selectedTheme={theme}
                    setSelectedTheme={setTheme}
                ></ProfileStats>
            ),
            preview: profileStats,
        },
        {
            component: (
                <ProfileStreak
                    formData={formData}
                    data={profileStreak}
                    setData={setProfileStreak}
                    profileStreakTheme={profileStreakTheme}
                    setProfileStreakTheme={setProfileStreakTheme}
                    isHideBorderChecked={hideBorderChecked}
                    setIsHideBorderChecked={setHideBorderChecked}
                ></ProfileStreak>
            ),
            preview: profileStreak,
        },
        {
            component: (
                <ProfileLanguageCard
                    formData={formData}
                    data={profileLanguageCard}
                    setData={setProfileLanguageCard}
                    selectedLayout={languageCardLayout}
                    setSelectedLayout={setLanguageCardLayout}
                    isHideProgressBarsChecked={hideProgressBars}
                    setIsHideProgressBarsChecked={setHideProgressBars}
                ></ProfileLanguageCard>
            ),
            preview: profileLanguageCard,
        },
        {
            component: (
                <ProfilePreview
                    formData={formData}
                    profileStats={profileStats}
                    profileStreak={profileStreak}
                    profileLanguageCard={profileLanguageCard}
                ></ProfilePreview>
            ),
        },
    ];

    function handleNext() {
        if (step < steps.length - 1) {
            if (step == 0 && formData.UserName == undefined) {
                alert("UserName is empty");
                return;
            }
            if (step === 3) {
                setGeneratePreview(true);
            }
            setStep((prevStep) => prevStep + 1);
        }
    }

    function handlePrev() {
        if (step > 0) {
            const newStep = step - 1;
            setStep(newStep);
            if (step === 4) {
                setGeneratePreview(false);
            }
        }
    }

    return (
        <div className="app-container">
            <div className="header">
                <h1>GitHub Profile Readme Generator</h1>
            </div>
            <div className="container">
                {!generatePreview ? (
                    <>
                        <div className="form">{steps[step].component}</div>
                        <div className="preview">
                            <Preview
                                stepNum={step}
                                data={steps[step].preview}
                            ></Preview>
                        </div>
                    </>
                ) : (
                    <ProfilePreview
                        formData={formData}
                        profileStats={profileStats}
                        profileStreak={profileStreak}
                        profileLanguageCard={profileLanguageCard}
                    />
                )}
            </div>
            <div className="navigation">
                <button onClick={handlePrev}>Prev</button>
                {!generatePreview && (
                    <button onClick={handleNext}>
                        {step !== 3 ? "Next" : "Generate Preview"}
                    </button>
                )}
            </div>
        </div>
    );
}

export default App;
