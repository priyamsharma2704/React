import { useState } from "react";
import "./App.css";
import Form from "./Components/Form.jsx";
function App() {
    return (
        <>
            <span>
                {/* TODO:change this heading */}
                <h1> GitHub Profile Readme Generator </h1>
            </span>
            <div className="container">
                <div className="form">
                    <Form></Form>
                </div>
                <div className="preview">Preview</div>
            </div>
        </>
    );
}

export default App;
