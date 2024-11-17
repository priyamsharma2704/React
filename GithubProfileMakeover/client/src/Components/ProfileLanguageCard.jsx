import React from "react";
import { useState, useEffect } from "react";
function ProfileLanguageCard({ data, setData }) {
    useEffect(() => {
        setData((prevData) => ({
            ...prevData,
            languageCard:
                "https://github-readme-stats.vercel.app/api/top-langs/?username=priyamsharma2704&layout=compact",
        }));
    }, []);
    const cardLayouts = ["Compact", "Donut", "Donut-Vertical", "Pie"];

    function handleLayoutSelect() {
        const selectedLayout = event.target.value.toLowerCase();
        let cardStr = data.languageCard;

        // Replace existing theme or add new theme if none exists
        if (cardStr.includes("&layout=")) {
            cardStr = cardStr.replace(
                /&layout=[^&]+/,
                `&layout=${selectedLayout}`
            );
        } else {
            cardStr += `&layout=${selectedLayout}`;
        }

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
                            <option key={idx}>{layout}</option>
                        ))}
                    </select>
                </span>
            </div>
        </div>
    );
}

export default ProfileLanguageCard;
