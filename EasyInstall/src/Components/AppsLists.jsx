import { useState } from "react";
function AppsLists({ setItemsInCart, setApps }) {
    const appList = [
        "FireFox",
        "Steam",
        "Discord",
        "Notion",
        "WinZip",
        "VSCode",
        "Oh My Posh",
        "Chrome",
        "1Password",
        "Windows Terminal",
        "KDiff",
        "StreamLabs",
        "Vim",
        "Unity",
        "GitButler",
        "Ear Trumpet",
        "Microsoft Teams",
        "Zoom",
        "iTunes",
        "Notepad++",
        "GIMP",
        "PuTTY",
        "Skype",
    ];

    function handleCheckboxClick(e) {
        //console.log(e);
        //console.log(e.target.parentElement.innerText)
        const currItem = e.target.parentElement.innerText;
        var idx = appList.indexOf(currItem);
        if (!e.target.checked) 
        {
            setItemsInCart((prevItem) => prevItem - 1);

            /*
            When using React, you should never mutate the state directly. If an object (or Array, which is an object too) is changed, you should create a new copy.
            Others have suggested using Array.prototype.splice(), but that method mutates the Array, so it's better not to use splice() with React.
            Easiest to use Array.prototype.filter() to create a new array:
                    */
            setApps((apps) =>
                apps.filter(function (list) {
                return list != currItem;
                })
            );
            return;
        }

        setItemsInCart((prevItem) => prevItem + 1);
        setApps((apps) => [...apps, e.target.parentElement.innerText]);
    }

    return (
        <>
        <ul>
            {appList.map((app, index) => (
            <li key={index}>
                <input type="checkbox" onClick={handleCheckboxClick}></input> {app}
            </li>
            ))}
        </ul>
        </>
    );
}

export default AppsLists;
