function Form({ data, setData }) {
    function handleInput(event) {
        const { name, value } = event.target;
        setData((prevData) => ({ ...prevData, [name]: value.trim() }));
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
                    <span className="label">Username</span>
                    <br></br>
                    <input
                        type="text"
                        onChange={handleInput}
                        name="Name"
                    ></input>
                    <br></br>
                    <span className="label">Title</span>
                    <br></br>
                    <input
                        type="text"
                        placeholder="Hi, I'm..."
                        name="Title"
                        onChange={handleInput}
                    ></input>
                    <br></br>
                    <span className="label">I'm based in</span>
                    <br></br>
                    <input
                        type="text"
                        placeholder="New York"
                        name="Location"
                        onChange={handleInput}
                    ></input>
                    <br></br>
                    <span className="label">Email</span>
                    <br></br>
                    <input
                        type="text"
                        name="Email"
                        onChange={handleInput}
                    ></input>
                    <br></br>
                    <span className="label">Current Project</span>
                    <br></br>
                    <input
                        type="text"
                        name="CurrentProject"
                        onChange={handleInput}
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
                    <br></br>
                    <input
                        type="text"
                        name="Twitter"
                        onChange={handleInput}
                    ></input>
                    <br></br>
                    <span className="label">Linkedin</span>
                    <br></br>
                    <input
                        type="text"
                        name="LinkedIn"
                        onChange={handleInput}
                    ></input>
                    <br></br>
                    <span className="label">Instagram</span>
                    <br></br>
                    <input
                        type="text"
                        name="Instagram"
                        onChange={handleInput}
                    ></input>
                    <br></br>
                    <span className="label">Youtube</span>
                    <br></br>
                    <input
                        type="text"
                        name="Youtube"
                        onChange={handleInput}
                    ></input>
                    <br></br>
                    <span className="label">Stackoverflow</span>
                    <br></br>
                    <input
                        type="text"
                        name="StackOverFlow"
                        onChange={handleInput}
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
