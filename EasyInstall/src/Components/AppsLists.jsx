import { useState } from "react";
function AppsLists() 
{
    const [userList, setUserList] = useState([]);

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

    function handleCheckboxClick(e)
    {
        console.log(e);
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
