import React from "react";
import Settings from "./Settings.tsx";
import CoresNGpus from "./CoresNGpus.tsx";
import Advanced from "./Advanced.tsx";

const RightPane = () => {
    return (
        <div className="sps-root">
            <Settings />
            <CoresNGpus />
            <Advanced />
        </div>
    );
};

export default RightPane;
