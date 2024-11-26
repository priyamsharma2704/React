import React from "react";
import Twitter from "../assets/twitter.png";
import Linkedin from "../assets/linkedin.png";
import Youtube from "../assets/yt.png";
import StackOverflow from "../assets/stack-of.png";
import Instagram from "../assets/insta.png";
function Preview({ stepNum, data }) {
    console.log(data);
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
                            {data.Email && (
                                <li>You can reach me at {data.Email}</li>
                            )}
                            {data.CurrentProject && (
                                <li>
                                    I am currently working on{" "}
                                    <strong>{data.CurrentProject}</strong>
                                </li>
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

                    {data.UserName && <hr></hr>}

                    {(data.Twitter ||
                        data.Instagram ||
                        data.Youtube ||
                        data.StackOverFlow) && <h2>Socials</h2>}

                    {data.Twitter && (
                        <a href={data.Twitter}>
                            <img src={Twitter} className="logo"></img>
                        </a>
                    )}
                    {data.LinkedIn && (
                        <a href={data.Linkedin}>
                            <img src={Linkedin} className="logo"></img>
                        </a>
                    )}
                    {data.Instagram && (
                        <a href={data.Instagram}>
                            <img src={Instagram} className="logo"></img>
                        </a>
                    )}
                    {data.Youtube && (
                        <a href={data.Youtube}>
                            <img src={Youtube} className="logo"></img>
                        </a>
                    )}
                    {data.StackOverFlow && (
                        <a href={data.StackOverFlow}>
                            <img src={StackOverflow} className="logo"></img>
                        </a>
                    )}

                    {data.skills &&
                        Object.values(data.skills).some(
                            (skillArray) => skillArray.length > 0
                        ) && <hr></hr>}

                    <div className="skills">
                        {data.skills &&
                            // Loop through each skill category
                            Object.keys(data.skills).map((category) => {
                                // Get skills for this category
                                const skillsInCategory = data.skills[category];

                                // Only show category if it has skills
                                if (
                                    skillsInCategory &&
                                    skillsInCategory.length > 0
                                ) {
                                    return (
                                        <div
                                            key={category}
                                            className="skill-category"
                                        >
                                            <h3>{category}</h3>
                                            <div className="skill-list">
                                                {skillsInCategory.map(
                                                    (skill, index) => (
                                                        <span
                                                            key={index}
                                                            className="skill-item"
                                                        >
                                                            {skill}
                                                        </span>
                                                    )
                                                )}
                                            </div>
                                        </div>
                                    );
                                }
                                return null;
                            })}
                    </div>
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
