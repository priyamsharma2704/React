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

function Preview() {
    return (
        <div>
            Previewasdasdasdaads asdasdsad asdasdasdas dasdasdas dasdasdas
            dasdasd asdasd asdasd sad
        </div>
    );
}

export default Preview;
