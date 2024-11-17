import React from "react";
import { useState, useEffect } from "react";
function ProfileLanguageCard({ data, setData }) {
    useEffect(() => {
        setData((prevData) => ({
            ...prevData,
            languageCard:
                "https://github-readme-stats.vercel.app/api/top-langs/?username=priyamsharma2704&layout=compact&hide_progress=false",
        }));
    }, []);

    const cardLayouts = ["Compact", "Donut", "Donut-Vertical", "Pie"];
    const [isHideProgressBarsChecked, setIsHideProgressBarsChecked] =
        useState(false);
    const [selectedLayout, setSelectedLayout] = useState("compact");

    function handleLayoutSelect() {
        const selectedLayout = event.target.value.toLowerCase();
        let cardStr = data.languageCard;

        cardStr = `https://github-readme-stats.vercel.app/api/top-langs/?username=priyamsharma2704&layout=${selectedLayout}&hide_progress=false`;

        console.log(cardStr);

        setSelectedLayout(selectedLayout);

        setData((prevData) => ({
            ...prevData,
            languageCard: cardStr,
        }));
    }

    function handleHideProgressBarsChecked() {
        setIsHideProgressBarsChecked(!isHideProgressBarsChecked);

        const newLayout = !isHideProgressBarsChecked
            ? "compact"
            : selectedLayout;
        if (!isHideProgressBarsChecked) {
            setSelectedLayout("compact");
        }

        const cardStr = `https://github-readme-stats.vercel.app/api/top-langs/?username=priyamsharma2704&layout=${newLayout}&hide_progress=${!isHideProgressBarsChecked}`;

        setData((prevData) => ({
            ...prevData,
            languageCard: cardStr,
        }));
    }

    return (
        <div className="profileContainer">
            {/* ----------- GITHUB LANG CARD ----------- */}
            <div className="profile">
                <span className="sectionHeading">Profile Language Card</span>
                <br></br>
                <span className="sectionDesc">
                    Customize your Github Language Card
                </span>
            </div>
            <div className="profileInputs">
                <span className="label">
                    Theme
                    <select
                        name="theme"
                        type="checkbox"
                        onChange={handleLayoutSelect}
                    >
                        {cardLayouts.map((layout, idx) => (
                            <option
                                key={idx}
                                selected={
                                    layout.toLowerCase() === selectedLayout
                                }
                            >
                                {layout}
                            </option>
                        ))}
                    </select>
                </span>
                <span className="label">
                    Hide Progress Bars
                    <input
                        type="checkbox"
                        onChange={handleHideProgressBarsChecked}
                        checked={isHideProgressBarsChecked}
                    />
                </span>
                <h6>
                    * Note: Hiding progress bars will automatically switch to
                    compact layout
                </h6>
            </div>
        </div>
    );
}

export default ProfileLanguageCard;
