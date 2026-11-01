import React from "react";

const Advanced = () => {
    return (
        <div>
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
                        <label className="sps-label">Scratch Directory:</label>
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
                            <span>Generate input file only (do not solve)</span>
                        </label>
                    </div>
                    <div className="sps-row">
                        <label className="sps-checkbox-label">
                            <input className="sps-checkbox" type="checkbox" />
                            <span>Enable Shared Memory Parallel (SMP)</span>
                        </label>
                    </div>
                    <div className="sps-row">
                        <label className="sps-checkbox-label">
                            <input className="sps-checkbox" type="checkbox" />
                            <span>Write APDL Commands Log File</span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Advanced;
