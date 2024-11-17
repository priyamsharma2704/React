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

    function handleHideProgressBarsChecked() {
        let cardStr = data.languageCard;

        //if prev state is false, hide the progress bars
        if (!isHideProgressBarsChecked) {
            cardStr = cardStr.replace(
                "&hide_progress=false",
                "&hide_progress=true"
            );
        } else {
            if (cardStr.includes("&hide_progress=true")) {
                cardStr = cardStr.replace(
                    "&hide_progress=true",
                    "&hide_progress=false"
                );
            }
        }

        setData((prevData) => ({
            ...prevData,
            languageCard: cardStr,
        }));

        setIsHideProgressBarsChecked(!isHideProgressBarsChecked);
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
                <span className="label">
                    Hide Progress Bars
                    <input
                        type="checkbox"
                        onChange={handleHideProgressBarsChecked}
                        checked={isHideProgressBarsChecked}
                    />
                </span>
            </div>
        </div>
    );
}

export default ProfileLanguageCard;
