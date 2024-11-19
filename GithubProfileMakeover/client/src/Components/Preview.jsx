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
    const markdown = `
Hi, **I'm** ${data.Name}
I work as a ${data.Title}
Currently I am working on ${data.CurrentProject}

I am situated in ${data.Location}

## Contact:
- Email: ${data.Email}
- LinkedIn: ${data.Linkedin}
- Twitter: ${data.Twitter}
    `;
    return (
        <div>
            {stepNum == 0 && (
                <div className="formPreview">
                    <h1>Hi 👋, my name is {data.Name}</h1>
                    <hr></hr>
                    <h2>{data.Title}</h2>
                    <hr></hr>
                    <ul>
                        <li>I'm based in {data.Location}</li>
                        <li>{data.Email}</li>
                        <li>{data.CurrentProject}</li>
                    </ul>
                    <a
                        href="https://www.github.com/priyamsharma2704"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src="https://img.shields.io/github/followers/priyamsharma2704?logo=github&style=for-the-badge&color=64748b&labelColor=27272a" />
                    </a>
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
