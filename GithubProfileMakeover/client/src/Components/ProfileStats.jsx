import React from "react";
import { useState, useEffect } from "react";

/*
    Data will contain the github stats link
    https://github-readme-stats.vercel.app/api?username=priyamsharma2704

    - show/hide indivisual stats : https://github-readme-stats.vercel.app/api?username=priyamsharma2704&hide=contribs,prs

    - show/hide additional stats : https://github-readme-stats.vercel.app/api?username=priyamsharma2704&show=reviews,discussions_started,discussions_answered,prs_merged,prs_merged_percentage

    - show/hide icons : https://github-readme-stats.vercel.app/api?username=priyamsharma2704&show_icons=true

    - themes : https://github-readme-stats.vercel.app/api?username=priyamsharma2704&show_icons=true&theme=radical
     */

function ProfileStats({ data, setData }) {
    useEffect(() => {
        if (!data.statsUrl) {
            setData((prevData) => ({
                ...prevData,
                statsUrl:
                    "https://github-readme-stats.vercel.app/api?username=priyamsharma2704&hide=contribs,prs",
            }));
        }
    }, [data]);

    const [isIndividualStatsChecked, setIsIndividualStatsChecked] =
        useState(false);
    const [isAdditionalStatsChecked, setIsAdditionalStatsChecked] =
        useState(false);

    function handleIsIndividualStatsChecked() {
        let statsStr =
            data.statsUrl ||
            "https://github-readme-stats.vercel.app/api?username=priyamsharma2704";

        if (isIndividualStatsChecked) {
            statsStr = statsStr.replace("&hide=contribs,prs", "");
        } else {
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

        if (isAdditionalStatsChecked) {
            statsStr = statsStr.replace(
                "show=reviews,discussions_started,discussions_answered,prs_merged,prs_merged_percentage",
                ""
            );
        } else {
            if (
                !statsStr.includes(
                    "show=reviews,discussions_started,discussions_answered,prs_merged,prs_merged_percentage"
                )
            )
                statsStr +=
                    "show=reviews,discussions_started,discussions_answered,prs_merged,prs_merged_percentage";
        }
        console.log(statsStr);
        setIsAdditionalStatsChecked(!isAdditionalStatsChecked);
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
                    Hide individual stats
                    <input
                        type="checkbox"
                        id="vehicle1"
                        name="vehicle1"
                        value="Bike"
                        onChange={handleIsIndividualStatsChecked}
                        checked={isIndividualStatsChecked}
                    />
                </span>
                <span className="label">
                    Hide additional stats
                    <input
                        type="checkbox"
                        id="vehicle1"
                        name="vehicle1"
                        value="Bike"
                        onChange={handleAdditionalStatsChecked}
                        checked={isAdditionalStatsChecked}
                    />
                </span>
            </div>
        </div>
    );
}

export default ProfileStats;
