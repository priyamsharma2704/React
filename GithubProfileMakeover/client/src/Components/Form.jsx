import { useState } from "react";
function Form({ data, setData, selectedSkills, setSelectedSkills }) {
    let programmingLanguages = [
        "JavaScript",
        "Python",
        "Java",
        "C#",
        "C++",
        "Ruby",
        "Go",
        "Rust",
        "Kotlin",
        "Swift",
        "PHP",
        "TypeScript",
    ];

    const frontEndFrameworks = [
        "React",
        "Angular",
        "Vue.js",
        "Svelte",
        "Next.js",
        "Nuxt.js",
        "Ember.js",
        "Preact",
        "Gatsby",
    ];

    const backEndFrameworks = [
        "Node.js",
        "Django",
        "Flask",
        "Ruby on Rails",
        "Spring Boot",
        "ASP.NET",
        "Express.js",
        "FastAPI",
        "NestJS",
        "Laravel",
    ];

    const testingFrameworks = [
        "Jest",
        "Mocha",
        "Chai",
        "Cypress",
        "Puppeteer",
        "Playwright",
        "Karma",
        "Enzyme",
        "Testing Library",
        "RSpec",
        "JUnit",
    ];

    const cloudTechnologies = [
        "AWS",
        "Azure",
        "Google Cloud Platform (GCP)",
        "IBM Cloud",
        "Oracle Cloud",
        "DigitalOcean",
        "Heroku",
        "Netlify",
        "Vercel",
    ];

    const mobileAppTechnologies = [
        "React Native",
        "Flutter",
        "Swift",
        "Kotlin",
        "Ionic",
        "Cordova",
        "Xamarin",
        "NativeScript",
    ];

    const aiMlTechnologies = [
        "TensorFlow",
        "PyTorch",
        "Keras",
        "Scikit-learn",
        "OpenAI API",
        "Hugging Face Transformers",
        "Google ML Kit",
        "Azure AI",
        "IBM Watson",
    ];

    const databases = [
        "MySQL",
        "PostgreSQL",
        "MongoDB",
        "SQLite",
        "Oracle Database",
        "Firebase Realtime Database",
        "Redis",
        "Cassandra",
        "DynamoDB",
        "MariaDB",
    ];

    const devOpsTechnologies = [
        "Docker",
        "Kubernetes",
        "Terraform",
        "Ansible",
        "Jenkins",
        "CircleCI",
        "GitLab CI/CD",
        "AWS CodePipeline",
        "Prometheus",
        "Grafana",
    ];

    const operatingSystems = [
        "Windows",
        "macOS",
        "Linux",
        "Ubuntu",
        "Fedora",
        "Debian",
        "CentOS",
        "Red Hat",
        "Android",
        "iOS",
    ];

    function handleInput(event) {
        const { name, value } = event.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    function handleSkillsClick(category, skill) {
        console.log(category, skill);
        let updatedSelectedSkills = { ...selectedSkills };

        if (!updatedSelectedSkills[category]) {
            updatedSelectedSkills[category] = [];
            updatedSelectedSkills[category].push(skill);
        } else {
            if (updatedSelectedSkills[category].includes(skill)) {
                updatedSelectedSkills[category] = updatedSelectedSkills[
                    category
                ].filter((selectedSkill) => selectedSkill !== skill);
            } else {
                updatedSelectedSkills[category].push(skill);
            }
        }

        setSelectedSkills(updatedSelectedSkills);
        setData((prevData) => ({ ...prevData, skills: updatedSelectedSkills }));
    }

    function isSelected(category, skill) {
        if (selectedSkills[category]) {
            if (selectedSkills[category].includes(skill)) return true;
        }
        return false;
    }

    return (
        <>
            <div className="profileContainer">
                {/* ----------- PROFILE ----------- */}
                <div className="profile">
                    <span className="sectionHeading">Profile</span>
                    <br></br>
                    <span className="sectionDesc">
                        Some public information about you
                    </span>
                </div>
                <div className="profileInputs">
                    <span className="label">Github Username</span>
                    <input
                        type="text"
                        onChange={handleInput}
                        name="UserName"
                        value={data.UserName || ""}
                    ></input>
                    <br></br>

                    <span className="label">Name</span>
                    <input
                        type="text"
                        onChange={handleInput}
                        name="Name"
                        value={data.Name || ""}
                    ></input>
                    <br></br>

                    <span className="label">Title</span>
                    <input
                        type="text"
                        placeholder="Hi, I'm..."
                        name="Title"
                        onChange={handleInput}
                        value={data.Title || ""}
                    ></input>
                    <br></br>

                    <span className="label">About me</span>
                    <input
                        type="text"
                        placeholder="About me..."
                        name="AboutMe"
                        onChange={handleInput}
                        value={data.AboutMe || ""}
                    ></input>
                    <br></br>

                    <span className="label">I'm based in</span>
                    <input
                        type="text"
                        placeholder="New York"
                        name="Location"
                        onChange={handleInput}
                        value={data.Location || ""}
                    ></input>
                    <br></br>

                    <span className="label">Email</span>
                    <input
                        type="text"
                        name="Email"
                        onChange={handleInput}
                        value={data.Email || ""}
                    ></input>
                    <br></br>

                    <span className="label">Current Project</span>
                    <input
                        type="text"
                        name="CurrentProject"
                        onChange={handleInput}
                        value={data.CurrentProject || ""}
                    ></input>
                    <br></br>
                </div>

                {/* ----------- SOCIALS ----------- */}
                <div className="profile">
                    <span className="sectionHeading">Socials</span>
                    <br></br>
                    <span className="sectionDesc">
                        Add some social media links
                    </span>
                </div>
                <div className="profileInputs">
                    <span className="label">Twitter</span>
                    <input
                        type="text"
                        name="Twitter"
                        onChange={handleInput}
                        value={data.Twitter || ""}
                    ></input>
                    <br></br>

                    <span className="label">Linkedin</span>
                    <input
                        type="text"
                        name="LinkedIn"
                        onChange={handleInput}
                        value={data.LinkedIn || ""}
                    ></input>
                    <br></br>

                    <span className="label">Instagram</span>
                    <input
                        type="text"
                        name="Instagram"
                        onChange={handleInput}
                        value={data.Instagram || ""}
                    ></input>
                    <br></br>

                    <span className="label">Youtube</span>
                    <input
                        type="text"
                        name="Youtube"
                        onChange={handleInput}
                        value={data.Youtube || ""}
                    ></input>
                    <br></br>

                    <span className="label">Stackoverflow</span>
                    <input
                        type="text"
                        name="StackOverFlow"
                        onChange={handleInput}
                        value={data.StackOverFlow || ""}
                    ></input>
                    <br></br>
                </div>

                {/* ----------- SKILLS ----------- */}
                <div className="profile">
                    <span className="sectionHeading">Skills</span>
                    <br></br>
                    <span className="sectionDesc">Showcase your skills</span>
                </div>
                <div className="profileInputs">
                    <span className="label">Programming Languages</span>
                    {programmingLanguages.map((pl, idx) => (
                        <button
                            className={`selected ${
                                isSelected("programmingLanguages", pl)
                                    ? "active"
                                    : ""
                            }`}
                            onClick={() =>
                                handleSkillsClick("programmingLanguages", pl)
                            }
                        >
                            {pl}
                        </button>
                    ))}

                    <p></p>
                    <span className="label">FrontEnd Frameworks</span>
                    {frontEndFrameworks.map((frontend, idx) => (
                        <button
                            className={`selected ${
                                isSelected("frontend", frontend) ? "active" : ""
                            }`}
                            onClick={() =>
                                handleSkillsClick("frontend", frontend)
                            }
                        >
                            {frontend}
                        </button>
                    ))}

                    <p></p>
                    <span className="label">Backend Frameworks</span>
                    {backEndFrameworks.map((backend, idx) => (
                        <button
                            className={`selected ${
                                isSelected("backend", backend) ? "active" : ""
                            }`}
                            onClick={() =>
                                handleSkillsClick("backend", backend)
                            }
                        >
                            {backend}
                        </button>
                    ))}

                    <p></p>
                    <span className="label">Testing Frameworks</span>
                    {testingFrameworks.map((testing) => (
                        <button
                            className={`selected ${
                                isSelected("testing", testing) ? "active" : ""
                            }`}
                            onClick={() =>
                                handleSkillsClick("testing", testing)
                            }
                        >
                            {testing}
                        </button>
                    ))}

                    <p></p>
                    <span className="label">Cloud Technologies</span>
                    {cloudTechnologies.map((cloud) => (
                        <button
                            className={`selected ${
                                isSelected("cloud", cloud) ? "active" : ""
                            }`}
                            onClick={() => handleSkillsClick("cloud", cloud)}
                        >
                            {cloud}
                        </button>
                    ))}

                    <p></p>
                    <span className="label">Mobile App Technologies</span>
                    {mobileAppTechnologies.map((mobile) => (
                        <button
                            className={`selected ${
                                isSelected("mobile", mobile) ? "active" : ""
                            }`}
                            onClick={() => handleSkillsClick("mobile", mobile)}
                        >
                            {mobile}
                        </button>
                    ))}

                    <p></p>
                    <span className="label">AI/ML Technologies</span>
                    {aiMlTechnologies.map((ai) => (
                        <button
                            className={`selected ${
                                isSelected("ai", ai) ? "active" : ""
                            }`}
                            onClick={() => handleSkillsClick("ai", ai)}
                        >
                            {ai}
                        </button>
                    ))}

                    <p></p>
                    <span className="label">Databases</span>
                    {databases.map((db) => (
                        <button
                            className={`selected ${
                                isSelected("db", db) ? "active" : ""
                            }`}
                            onClick={() => handleSkillsClick("db", db)}
                        >
                            {db}
                        </button>
                    ))}

                    <p></p>
                    <span className="label">DevOps Technologies</span>
                    {devOpsTechnologies.map((devops) => (
                        <button
                            className={`selected ${
                                isSelected("devops", devops) ? "active" : ""
                            }`}
                            onClick={() => handleSkillsClick("devops", devops)}
                        >
                            {devops}
                        </button>
                    ))}

                    <p></p>
                    <span className="label">Operating Systems</span>
                    {operatingSystems.map((os) => (
                        <button
                            className={`selected ${
                                isSelected("os", os) ? "active" : ""
                            }`}
                            onClick={() => handleSkillsClick("os", os)}
                        >
                            {os}
                        </button>
                    ))}
                </div>
            </div>
        </>
    );
}
export default Form;
