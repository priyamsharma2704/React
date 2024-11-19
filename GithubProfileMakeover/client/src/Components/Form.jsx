function Form({ data, setData }) {
    function handleInput(event) {
        const { name, value } = event.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
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
                    <button>C++</button>
                    <button>C#</button>
                    <button>JS</button>
                    <button>React</button>
                </div>
            </div>
        </>
    );
}
export default Form;
