import React from "react";

const Settings = () => {
    return (
        <>
            <div className="sps-row sps-row--top">
                <label className="sps-label">Solution Execution Target:</label>
                <div className="sps-select-wrap">
                    <select className="sps-select">
                        <option>RSM</option>
                        <option>Local</option>
                    </select>
                </div>
            </div>
            <div>
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
            </div>
        </>
    );
};

export default Settings;
