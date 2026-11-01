import React from "react";

const CoresNGpus = () => {
    return (
        <div>
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
                            <input className="sps-checkbox" type="checkbox" />
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
                            <input className="sps-checkbox" type="checkbox" />
                            <span>
                                Manually specify Mechanical APDL solver memory
                                settings
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
        </div>
    );
};

export default CoresNGpus;
