import React from "react";

const LeftPane = () => {
    return (
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
    );
};

export default LeftPane;
