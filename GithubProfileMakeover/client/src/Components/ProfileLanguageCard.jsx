import React from "react";
import { useState, useEffect } from "react";

function ProfileLanguageCard({
    formData,
    data,
    setData,
    selectedLayout,
    setSelectedLayout,
    isHideProgressBarsChecked,
    setIsHideProgressBarsChecked,
}) {
    useEffect(() => {
        setData((prevData) => ({
            ...prevData,
            languageCard: formData.UserName
                ? `https://github-readme-stats.vercel.app/api/top-langs/?username=${formData.UserName}&layout=compact&hide_progress=false`
                : "",
        }));
    }, [formData.UserName]);

    const cardLayouts = ["Compact", "Donut", "Donut-Vertical", "Pie"];

    function handleLayoutSelect(event) {
        const newLayout = event.target.value.toLowerCase();
        const cardStr = `https://github-readme-stats.vercel.app/api/top-langs/?username=${formData.UserName}&layout=${newLayout}&hide_progress=${isHideProgressBarsChecked}`;

        setSelectedLayout(newLayout);
        if (newLayout != "compact") setIsHideProgressBarsChecked(false);
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
