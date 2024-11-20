import React from "react";

function Preview({ stepNum, data }) {
    return (
        <div>
            {stepNum == 0 && (
                <div className="formPreview">
                    {data.Name && <h1>Hi 👋, my name is {data.Name}</h1>}
                    {(data.Name || data.Title) && <hr />}
                    {data.Title && <h2>I work as a {data.Title}</h2>}
                    {(data.Title || data.AboutMe) && <hr />}
                    {data.AboutMe && <p>{data.AboutMe}</p>}
                    {(data.Location || data.Email || data.CurrentProject) && (
                        <ul>
                            {data.Location && (
                                <li>I'm based in {data.Location}</li>
                            )}
                            {data.Email && <li>{data.Email}</li>}
                            {data.CurrentProject && (
                                <li>{data.CurrentProject}</li>
                            )}
                        </ul>
                    )}
                    {data.UserName && (
                        <a
                            href={`https://www.github.com/${data.UserName}`}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                src={`https://img.shields.io/github/followers/${data.UserName}?logo=github&style=for-the-badge&color=64748b&labelColor=27272a`}
                            />
                        </a>
                    )}
                    <hr></hr>
                    <h2>Socials</h2>
                    add links >>>> LinkedIn | Twitter | Instagram | Stack
                    overflow
                    <hr></hr>
                    <h2>Skills</h2>
                </div>
            )}

            {stepNum == 1 && (
                <>
                    <div>
                        <img className="profileStats" src={data.statsUrl} />
                    </div>
                </>
            )}

            {stepNum == 2 && (
                <>
                    <div>
                        <img className="profileStats" src={data.statsStreak} />
                    </div>
                </>
            )}

            {stepNum == 3 && (
                <>
                    <div>
                        <img className="profileStats" src={data.languageCard} />
                    </div>
                </>
            )}
        </div>
    );
}

export default Preview;
