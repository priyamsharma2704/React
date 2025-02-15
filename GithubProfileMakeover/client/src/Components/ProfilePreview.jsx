import React, { useState } from "react";
import "./ProfilePreview.css";
import { marked } from "marked";

function ProfilePreview({
    formData,
    profileStats,
    profileStreak,
    profileLanguageCard,
}) {
    const [copied, setCopied] = useState(false);

    const generateMarkdown = () => {
        let markdown = "";

        // Header section
        if (formData.Name) markdown += `# Hi 👋, my name is ${formData.Name}\n`;
        if (formData.Title) markdown += `## I work as a ${formData.Title}\n`;
        if (formData.AboutMe) markdown += `\n${formData.AboutMe}\n`;

        // Location, Email, Current Project
        if (formData.Location || formData.Email || formData.CurrentProject) {
            markdown += "\n";
            if (formData.Location)
                markdown += `- 🌍 I'm based in ${formData.Location}\n`;
            if (formData.Email) markdown += `- ✉️ ${formData.Email}\n`;
            if (formData.CurrentProject)
                markdown += `- 🚀 Currently working on ${formData.CurrentProject}\n`;
        }

        // Skills section
        if (formData.skills) {
            const hasSkills = Object.values(formData.skills).some(
                (skillArray) => skillArray.length > 0
            );
            if (hasSkills) {
                markdown += "\n### Skills\n\n";
                Object.keys(formData.skills).forEach((category) => {
                    const skillsInCategory = formData.skills[category];
                    if (skillsInCategory && skillsInCategory.length > 0) {
                        markdown += `\n#### ${category.toUpperCase()}\n\n`;
                        skillsInCategory.forEach((skill) => {
                            markdown += `- ${skill}\n`;
                        });
                    }
                });
            }
        }

        // GitHub Stats section
        if (formData.UserName) {
            markdown += "\n### GitHub Stats\n\n";
            if (profileStats.statsUrl) {
                markdown += `![GitHub Stats](${profileStats.statsUrl})\n\n`;
            }
            if (profileStreak.statsStreak) {
                markdown += `![GitHub Streak](${profileStreak.statsStreak})\n\n`;
            }
            if (profileLanguageCard.languageCard) {
                markdown += `![Top Languages](${profileLanguageCard.languageCard})\n`;
            }
        }

        return markdown;
    };

    const handleCopy = async () => {
        const markdown = generateMarkdown();
        try {
            await navigator.clipboard.writeText(markdown);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
        } catch (err) {
            console.error("Failed to copy:", err);
        }
    };

    return (
        <div className="profile-preview-container">
            <button
                className={`copy-button ${copied ? "copied" : ""}`}
                onClick={handleCopy}
            >
                {copied ? "Copied!" : "Copy Markdown"}
            </button>
            {/* <pre>{generateMarkdown()}</pre> */}
            <div
                className="prose p-4 bg-gray-50 h-96 overflow-auto"
                dangerouslySetInnerHTML={{
                    __html: marked.parse(generateMarkdown()),
                }}
            />
            {/* <div className="profile-header">
                {formData.Name && (
                    <h1>
                        Hi 👋, my name is {formData.Name}
                        <hr></hr>
                    </h1>
                )}
                {formData.Title && (
                    <h2>
                        I work as a {formData.Title}
                        <hr></hr>
                    </h2>
                )}
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
            </div> */}
        </div>
    );
}

export default ProfilePreview;
