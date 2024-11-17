import { useState, useEffect } from "react";
import React from "react";

function ProfileStreak({
    data,
    setData,
    isHideBorderChecked,
    setIsHideBorderChecked,
    profileStreakTheme,
    setProfileStreakTheme,
}) {
    //const [isHideBorderChecked, setIsHideBorderChecked] = useState(false);

    useEffect(() => {
        if (!data.statsStreak) {
            setData((prevData) => ({
                ...prevData,
                statsStreak:
                    "https://streak-stats.demolab.com/?user=priyamsharma2704&theme=default",
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
        setProfileStreakTheme(selectedTheme);
        let statsStreakStr = `https://streak-stats.demolab.com/?user=priyamsharma2704&theme=${selectedTheme}&hide_border=${isHideBorderChecked}`;

        setData((prevData) => ({
            ...prevData,
            statsStreak: statsStreakStr,
        }));
    }

    function handleHideBorderChecked() {
        let statsStreakStr = data.statsStreak;

        //if prev state was true, then show the border
        if (!isHideBorderChecked) {
            if (!statsStreakStr.includes("&hide_border=true")) {
                statsStreakStr += "&hide_border=true";
            }
        } else {
            //hide borders
            statsStreakStr = statsStreakStr.replace("&hide_border=true", "");
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
                            <option
                                key={idx}
                                selected={
                                    theme.toLowerCase() === profileStreakTheme
                                }
                            >
                                {theme}
                            </option>
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
