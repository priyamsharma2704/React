import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="sps-shell">
            {/* <!-- Left pane --> */}
            <div className="sps-sidebar">
                <div className="sps-sidebar__section-label">Queues</div>
                <ul className="sps-queue-list">
                    <li className="sps-queue-item sps-queue-item--selected">
                        My Computer
                    </li>
                    <li className="sps-queue-item">Local Queue</li>
                    <li className="sps-queue-item">Remote HPC</li>
                    <li className="sps-queue-item">Cluster Node 1</li>
                </ul>
                <div className="sps-sidebar__actions">
                    <button className="sps-sidebar__btn" title="Add Queue">
                        &#43;
                    </button>
                    <button className="sps-sidebar__btn" title="Remove Queue">
                        &#8722;
                    </button>
                </div>
            </div>

            {/* <!-- Right pane --> */}
            <div className="sps-root">
                {/* <!-- Solution Execution Target --> */}
                <div className="sps-row sps-row--top">
                    <label className="sps-label">
                        Solution Execution Target:
                    </label>
                    <div className="sps-select-wrap">
                        <select className="sps-select">
                            <option>RSM</option>
                            <option>Local</option>
                        </select>
                    </div>
                </div>

                {/* <!-- Settings Accordion --> */}
                <div className="sps-accordion">
                    <div className="sps-accordion__header">
                        <span>Settings</span>
                    </div>
                    <div className="sps-accordion__body">
                        <div className="sps-row">
                            <label className="sps-label">License:</label>
                            <div className="sps-select-wrap sps-select-wrap--wide">
                                <select className="sps-select">
                                    <option>Ansys Mechanical Enterprise</option>
                                    <option>Ansys Mechanical Pro</option>
                                </select>
                            </div>
                        </div>
                        <div className="sps-row">
                            <label className="sps-label">RSM Queue:</label>
                            <div className="sps-select-wrap">
                                <select className="sps-select">
                                    <option>Local</option>
                                    <option>Remote</option>
                                </select>
                            </div>
                        </div>
                        <div className="sps-row">
                            <label className="sps-label">Job Name:</label>
                            <input
                                className="sps-input"
                                type="text"
                                defaultValue="Mechanical"
                            />
                        </div>
                        <div className="sps-row">
                            <label className="sps-label">
                                HPC Configuration:
                            </label>
                            <span className="sps-value">localhost</span>
                        </div>
                        <div className="sps-row">
                            <label className="sps-label">HPC Type:</label>
                            <span className="sps-value">ARC</span>
                        </div>
                        <div className="sps-row">
                            <label className="sps-label">HPC Queue:</label>
                            <span className="sps-value">local</span>
                        </div>
                    </div>
                </div>

                {/* <!-- Cores and GPU Accordion --> */}
                <div className="sps-accordion">
                    <div className="sps-accordion__header">
                        <span>Cores and GPU</span>
                    </div>
                    <div className="sps-accordion__body">
                        <div className="sps-row sps-row--checkboxes">
                            <label className="sps-checkbox-label">
                                <input
                                    className="sps-checkbox"
                                    type="checkbox"
                                    defaultChecked
                                />
                                <span>Distribute Solution (if possible)</span>
                            </label>
                            <label className="sps-checkbox-label">
                                <input
                                    className="sps-checkbox"
                                    type="checkbox"
                                />
                                <span>Hybrid Parallel (Mechanical APDL)</span>
                            </label>
                        </div>
                        <div className="sps-row">
                            <label className="sps-label">
                                Max number of utilized cores:
                            </label>
                            <input
                                className="sps-input sps-input--narrow"
                                type="number"
                                defaultValue="6"
                            />
                        </div>
                        <div className="sps-row">
                            <label className="sps-label">
                                Threads per process:
                            </label>
                            <input
                                className="sps-input sps-input--narrow"
                                type="number"
                                defaultValue="1"
                            />
                        </div>
                        <div className="sps-row">
                            <label className="sps-label">
                                Number of processes:
                            </label>
                            <input
                                className="sps-input sps-input--narrow"
                                type="number"
                                defaultValue="4"
                            />
                        </div>
                        <div className="sps-row">
                            <label className="sps-checkbox-label">
                                <input
                                    className="sps-checkbox"
                                    type="checkbox"
                                />
                                <span>
                                    Manually specify Mechanical APDL solver
                                    memory settings
                                </span>
                            </label>
                        </div>
                        <div className="sps-row sps-row--indented">
                            <label className="sps-label">Workspace:</label>
                            <input
                                className="sps-input sps-input--narrow"
                                type="number"
                                defaultValue="0"
                            />
                            <span className="sps-unit">MB</span>
                        </div>
                        <div className="sps-row sps-row--indented">
                            <label className="sps-label">Database:</label>
                            <input
                                className="sps-input sps-input--narrow"
                                type="number"
                                defaultValue="0"
                            />
                            <span className="sps-unit">MB</span>
                        </div>
                        <div className="sps-row">
                            <label className="sps-label">
                                Use GPU acceleration (if possible):
                            </label>
                            <div className="sps-select-wrap">
                                <select className="sps-select">
                                    <option>None</option>
                                    <option>Auto</option>
                                </select>
                            </div>
                        </div>
                        <div className="sps-row">
                            <label className="sps-label">
                                Number of utilized GPU devices:
                            </label>
                            <input
                                className="sps-input sps-input--narrow"
                                type="number"
                                defaultValue="1"
                            />
                        </div>
                    </div>
                </div>

                {/* <!-- Advanced Accordion --> */}
                <div className="sps-accordion">
                    <div className="sps-accordion__header">
                        <span>Advanced</span>
                    </div>
                    <div className="sps-accordion__body">
                        <div className="sps-row">
                            <label className="sps-label">
                                Default Solver Type:
                            </label>
                            <div className="sps-select-wrap">
                                <select className="sps-select">
                                    <option>Program Controlled</option>
                                    <option>Direct</option>
                                    <option>Iterative</option>
                                </select>
                            </div>
                        </div>
                        <div className="sps-row">
                            <label className="sps-label">
                                Result File Compression:
                            </label>
                            <div className="sps-select-wrap">
                                <select className="sps-select">
                                    <option>Program Controlled</option>
                                    <option>None</option>
                                    <option>Maximum</option>
                                </select>
                            </div>
                        </div>
                        <div className="sps-row">
                            <label className="sps-label">Save MAPDL db:</label>
                            <div className="sps-select-wrap">
                                <select className="sps-select">
                                    <option>No</option>
                                    <option>Yes</option>
                                </select>
                            </div>
                        </div>
                        <div className="sps-row">
                            <label className="sps-label">
                                Scratch Directory:
                            </label>
                            <input
                                className="sps-input sps-input--wide"
                                type="text"
                                defaultValue="C:\Temp\Ansys"
                            />
                        </div>
                        <div className="sps-row">
                            <label className="sps-label">
                                Delete Unneeded Files:
                            </label>
                            <div className="sps-select-wrap">
                                <select className="sps-select">
                                    <option>Yes</option>
                                    <option>No</option>
                                </select>
                            </div>
                        </div>
                        <div className="sps-row">
                            <label className="sps-label">Solver Units:</label>
                            <div className="sps-select-wrap">
                                <select className="sps-select">
                                    <option>Active System</option>
                                    <option>SI</option>
                                    <option>CGS</option>
                                    <option>BFT</option>
                                </select>
                            </div>
                        </div>
                        <div className="sps-row">
                            <label className="sps-label">Max RAM Limit:</label>
                            <input
                                className="sps-input sps-input--narrow"
                                type="number"
                                defaultValue="8192"
                            />
                            <span className="sps-unit">MB</span>
                        </div>
                        <div className="sps-row">
                            <label className="sps-label">
                                License Queuing Timeout:
                            </label>
                            <input
                                className="sps-input sps-input--narrow"
                                type="number"
                                defaultValue="120"
                            />
                            <span className="sps-unit">sec</span>
                        </div>
                        <div className="sps-row">
                            <label className="sps-checkbox-label">
                                <input
                                    className="sps-checkbox"
                                    type="checkbox"
                                    defaultChecked
                                />
                                <span>
                                    Generate input file only (do not solve)
                                </span>
                            </label>
                        </div>
                        <div className="sps-row">
                            <label className="sps-checkbox-label">
                                <input
                                    className="sps-checkbox"
                                    type="checkbox"
                                />
                                <span>Enable Shared Memory Parallel (SMP)</span>
                            </label>
                        </div>
                        <div className="sps-row">
                            <label className="sps-checkbox-label">
                                <input
                                    className="sps-checkbox"
                                    type="checkbox"
                                />
                                <span>Write APDL Commands Log File</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
