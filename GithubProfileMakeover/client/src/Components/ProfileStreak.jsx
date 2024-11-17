import { useState, useEffect } from "react";
import React from "react";

function ProfileStreak({ data, setData }) {
    const [isHideBorderChecked, setIsHideBorderChecked] = useState(false);

    useEffect(() => {
        if (!data.statsStreak) {
            setData((prevData) => ({
                ...prevData,
                statsStreak:
                    "https://streak-stats.demolab.com/?user=priyamsharma2704&theme=deafult&hide_border=true",
            }));
        }
    }, [data]);

    let themes = [
        "Default",
        "Dark",
        "Radical",
        "Merko",
        "Gruvbox",
        "Tokyonight",
        "Onedark",
        "Cobalt",
        "Synthwave",
        "Highcontrast",
        "Dracula",
        "Shadow_Blue",
        "Great-Gatsby",
        "Solarized-Dark",
        "Material-Palenight",
        "Flag-India",
        "Slateorange",
        "Outrun",
        "Kacho_Ga",
        "Panda",
        "Rose",
        "Date_Night",
        "Apprentice",
    ];

    function handleThemeSelect() {
        let selectedTheme = event.target.value.toLowerCase();
        let statsStreakStr = data.statsStreak;

        // Replace existing theme or add new theme if none exists
        if (statsStreakStr.includes("&theme=")) {
            statsStreakStr = statsStreakStr.replace(
                /&theme=[^&]+/,
                `&theme=${selectedTheme}`
            );
        } else {
            statsStreakStr += `&theme=${selectedTheme}`;
        }

        setData((prevData) => ({
            ...prevData,
            statsStreak: statsStreakStr,
        }));
    }

    function handleHideBorderChecked() {
        let statsStreakStr = data.statsStreak;

        //if prev state was false, then hide the border
        if (!isHideBorderChecked) {
            statsStreakStr = statsStreakStr.replace("&hide_border=true", "");
        } else {
            if (!statsStreakStr.includes("&hide_border=true")) {
                statsStreakStr += "&hide_border=true";
            }
        }

        setData((prevData) => ({
            ...prevData,
            statsStreak: statsStreakStr,
        }));

        setIsHideBorderChecked(!isHideBorderChecked);
    }

    return (
        <div className="profileContainer">
            {/* ----------- GITHUB STREAK ----------- */}
            <div className="profile">
                <span className="sectionHeading">Profile Streak</span>
                <br></br>
                <span className="sectionDesc">
                    Customize your Github Streak
                </span>
            </div>
            <div className="profileInputs">
                <span className="label">
                    Theme
                    <select
                        name="theme"
                        type="checkbox"
                        onChange={handleThemeSelect}
                    >
                        {themes.map((theme, idx) => (
                            <option key={idx}>{theme}</option>
                        ))}
                    </select>
                </span>
                <span className="label">
                    Hide Border
                    <input
                        type="checkbox"
                        onChange={handleHideBorderChecked}
                        checked={isHideBorderChecked}
                    />
                </span>
            </div>
        </div>
    );
}

export default ProfileStreak;
