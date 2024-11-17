import React, { useSyncExternalStore } from "react";
import { useState, useEffect } from "react";

/*
    Data will contain the github stats link
    https://github-readme-stats.vercel.app/api?username=priyamsharma2704

    - DONE: show/hide indivisual stats : &hide=contribs,prs

    - DONE : show/hide additional stats : &show=reviews,discussions_started,discussions_answered,prs_merged,prs_merged_percentage

    - DONE : show/hide icons : &show_icons=true

    - DONE : themes : &theme=radical
     */

function ProfileStats({
    data,
    setData,
    isAdditionalStatsChecked,
    setIsAdditionalStatsChecked,
    isHideIconsChecked,
    setIsHideIconsChecked,
    isIndividualStatsChecked,
    setIsIndividualStatsChecked,
}) {
    //UseEffect is settting the states assuming the HiddenStates is True
    useEffect(() => {
        if (!data.statsUrl) {
            setData((prevData) => ({
                ...prevData,
                statsUrl:
                    "https://github-readme-stats.vercel.app/api?username=priyamsharma2704&hide=contribs,prs&show_icons=true&theme=default",
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

    function handleIsIndividualStatsChecked() {
        let statsStr =
            data.statsUrl ||
            "https://github-readme-stats.vercel.app/api?username=priyamsharma2704";

        // if prev state was true, then hide the stats
        if (isIndividualStatsChecked) {
            statsStr = statsStr.replace("&hide=contribs,prs", "");
        } else {
            //show stats
            if (!statsStr.includes("&hide=contribs,prs"))
                statsStr += "&hide=contribs,prs";
        }

        setData((prevData) => ({
            ...prevData,
            statsUrl: statsStr,
        }));
        setIsIndividualStatsChecked(!isIndividualStatsChecked);
    }

    function handleAdditionalStatsChecked() {
        let statsStr = data.statsUrl;

        //if prev state was false, then hide the stats
        if (!isAdditionalStatsChecked) {
            statsStr = statsStr.replace(
                "&show=reviews,discussions_started,discussions_answered,prs_merged,prs_merged_percentage",
                ""
            );
        } else {
            //show the stats
            if (
                !statsStr.includes(
                    "&show=reviews,discussions_started,discussions_answered,prs_merged,prs_merged_percentage"
                )
            )
                statsStr +=
                    "&show=reviews,discussions_started,discussions_answered,prs_merged,prs_merged_percentage";
        }

        setIsAdditionalStatsChecked(!isAdditionalStatsChecked);
        setData((prevData) => ({
            ...prevData,
            statsUrl: statsStr,
        }));
    }

    function handleHideIconsChecked() {
        let statsStr = data.statsUrl;

        //if prev state was false, then Hide the icons
        if (!isHideIconsChecked) {
            statsStr = statsStr.replace(
                "&show_icons=true",
                "&show_icons=false"
            );
        } else {
            //show icons
            if (statsStr.includes("&show_icons=false"))
                statsStr = statsStr.replace(
                    "&show_icons=false",
                    "&show_icons=true"
                );
        }

        setData((prevData) => ({
            ...prevData,
            statsUrl: statsStr,
        }));
        setIsHideIconsChecked(!isHideIconsChecked);
    }

    function handleThemeSelect() {
        let selectedTheme = event.target.value.toLowerCase();

        let statsStr = data.statsUrl;

        // Replace existing theme or add new theme if none exists
        if (statsStr.includes("&theme=")) {
            statsStr = statsStr.replace(
                /&theme=[^&]+/,
                `&theme=${selectedTheme}`
            );
        } else {
            statsStr += `&theme=${selectedTheme}`;
        }

        setData((prevData) => ({
            ...prevData,
            statsUrl: statsStr,
        }));
    }

    return (
        <div className="profileContainer">
            {/* ----------- GITHUB STATS ----------- */}
            <div className="profile">
                <span className="sectionHeading">Profile Stats</span>
                <br></br>
                <span className="sectionDesc">Customize your Github Stats</span>
            </div>
            <div className="profileInputs">
                <span className="label">
                    Hide Individual Stats
                    <input
                        type="checkbox"
                        onChange={handleIsIndividualStatsChecked}
                        checked={isIndividualStatsChecked}
                    />
                </span>
                <span className="label">
                    Hide Additional Stats
                    <input
                        type="checkbox"
                        onChange={handleAdditionalStatsChecked}
                        checked={isAdditionalStatsChecked}
                    />
                </span>
                <span className="label">
                    Hide Icons
                    <input
                        type="checkbox"
                        onChange={handleHideIconsChecked}
                        checked={isHideIconsChecked}
                    />
                </span>
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
            </div>
        </div>
    );
}

export default ProfileStats;
