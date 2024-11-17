// // src/components/MarkdownGenerator.js
// import React from "react";

// function MarkdownGenerator({ profileData }) {
//     const markdown = `
// # ${profileData.name}

// ${profileData.bio}

// ## Skills:
// ${profileData.skills.map((skill) => `- ${skill}`).join("\n")}

// ## Projects:
// ${profileData.projects
//     .map((project) => `- **${project.name}**: ${project.description}`)
//     .join("\n")}

// ## Contact:
// - Email: ${profileData.contact.email}
// - LinkedIn: ${profileData.contact.linkedin}
// - Twitter: ${profileData.contact.twitter}
//   `;

//     return (
//         <div className="MarkdownGenerator">
//             <h2>Generated Markdown</h2>
//             <pre>{markdown}</pre>
//             <button
//                 onClick={() => {
//                     navigator.clipboard.writeText(markdown);
//                     alert("Markdown code copied to clipboard!");
//                 }}
//             >
//                 Copy Markdown
//             </button>
//         </div>
//     );
// }

// export default MarkdownGenerator;

import React from "react";

function Preview({ stepNum, data }) {
    return (
        <div
            className={`preview-content ${
                stepNum === 0 ? "preview-form" : "preview-stats"
            }`}
        >
            {stepNum == 0 && (
                <>
                    <div>{data.Name}</div>
                    <div>{data.Title}</div>
                </>
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
