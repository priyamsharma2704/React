import React from "react";
import "./ProfilePreview.css";

function ProfilePreview({
    formData,
    profileStats,
    profileStreak,
    profileLanguageCard,
}) {
    console.log(formData.skills);
    return (
        <div className="profile-preview-container">
            <div className="profile-header">
                {formData.Name && <h1>Hi 👋, my name is {formData.Name}</h1>}
                {formData.Title && <h2>I work as a {formData.Title}</h2>}
                {formData.AboutMe && <p>{formData.AboutMe}</p>}

                {(formData.Location ||
                    formData.Email ||
                    formData.CurrentProject) && (
                    <ul>
                        {formData.Location && (
                            <li>I'm based in {formData.Location}</li>
                        )}
                        {formData.Email && <li>{formData.Email}</li>}
                        {formData.CurrentProject && (
                            <li>
                                Currently working on {formData.CurrentProject}
                            </li>
                        )}
                    </ul>
                )}
            </div>

            <div className="skills-section">
                {formData.skills &&
                    Object.keys(formData.skills).map((category) => {
                        // Get the skills array for this category
                        const skillsInCategory = formData.skills[category];

                        // Only render if there are skills in this category
                        if (skillsInCategory && skillsInCategory.length > 0) {
                            return (
                                <div key={category} className="skill-category">
                                    <h3>{category.toUpperCase()}</h3>
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

            <div className="github-stats">
                {formData.UserName && (
                    <>
                        <a
                            href={`https://github.com/${formData.UserName}`}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                src={`https://img.shields.io/github/followers/${formData.UserName}?logo=github&style=for-the-badge&color=64748b&labelColor=27272a`}
                                alt="github followers"
                            />
                        </a>

                        {profileStats.statsUrl && (
                            <img
                                src={profileStats.statsUrl}
                                alt="GitHub stats"
                            />
                        )}

                        {profileStreak.statsStreak && (
                            <img
                                src={profileStreak.statsStreak}
                                alt="GitHub streak"
                            />
                        )}

                        {profileLanguageCard.languageCard && (
                            <img
                                src={profileLanguageCard.languageCard}
                                alt="Top Languages"
                            />
                        )}
                    </>
                )}
            </div>
        </div>
    );
}

export default ProfilePreview;
