import React from "react";
import "./ProfilePreview.css";

function ProfilePreview({ formData, profileStats, profileStreak, profileLanguageCard }) {
    return (
        <div className="profile-preview-container">
            <div className="profile-header">
                {formData.Name && <h1>Hi 👋, my name is {formData.Name}</h1>}
                {formData.Title && <h2>I work as a {formData.Title}</h2>}
                {formData.AboutMe && <p>{formData.AboutMe}</p>}
                
                {(formData.Location || formData.Email || formData.CurrentProject) && (
                    <ul>
                        {formData.Location && <li>I'm based in {formData.Location}</li>}
                        {formData.Email && <li>{formData.Email}</li>}
                        {formData.CurrentProject && <li>Currently working on {formData.CurrentProject}</li>}
                    </ul>
                )}
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
                            <img src={profileStats.statsUrl} alt="GitHub stats" />
                        )}
                        
                        {profileStreak.statsStreak && (
                            <img src={profileStreak.statsStreak} alt="GitHub streak" />
                        )}
                        
                        {profileLanguageCard.languageCard && (
                            <img src={profileLanguageCard.languageCard} alt="Top Languages" />
                        )}
                    </>
                )}
            </div>
        </div>
    );
}

export default ProfilePreview;
