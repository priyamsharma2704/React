import React from "react";

const Inward = () => {
    return (
        <>
            <div className="inward-page">
                <input type="date" />
                <input type="text" placeholder="Receipt Num" />
                <input type="text" placeholder="Party" />
            </div>
            <div className="grid">
                <input type="text" placeholder="Item Name" />
                <input type="text" placeholder="Plot #" />
                <input type="text" placeholder="QTY" />
                <input type="text" placeholder="Unit" />
                <input type="text" placeholder="Rate" />
                <input type="text" placeholder="Weight" />
                <input type="text" placeholder="Other Expenses" />
                <input type="text" placeholder="Seller Name" />
            </div>
        </>
    );
};

export default Inward;
