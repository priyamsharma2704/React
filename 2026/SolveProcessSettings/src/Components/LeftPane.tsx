import React from "react";
import type { QueueList } from "./Types/types";

const LeftPane = ({ queues }: { queues: QueueList }) => {
    return (
        <div className="sps-sidebar">
            <div className="sps-sidebar__section-label">Queues</div>
            <ul className="sps-queue-list">
                {queues.map((queue, idx) => (
                    <li key={idx} className="sps-queue-item">
                        {queue}
                    </li>
                ))}
                {/* <li className="sps-queue-item sps-queue-item--selected">
                    My Computer
                </li>
                <li className="sps-queue-item">Local Queue</li>
                <li className="sps-queue-item">Remote HPC</li>
                <li className="sps-queue-item">Cluster Node 1</li> */}
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
