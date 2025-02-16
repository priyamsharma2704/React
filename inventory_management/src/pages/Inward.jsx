import { useState } from "react";

const Inward = () => {
    const rowData = {
        "Item Name": "",
        Plot: "",
        QTY: "",
        Unit: "",
        Rate: "",
        Weight: "",
        "Other Expense": "",
        "Seller Name": "",
    };

    const numberTypes = [
        "Plot",
        "QTY",
        "Unit",
        "Rate",
        "Weight",
        "Other Expense",
    ];
    const [data, setData] = useState([rowData]);

    function handleInputChange(val, key, idx) {
        // console.log(val, key, idx);
        setData((prevData) => {
            const gridData = [...prevData];
            const rData = gridData[idx];

            rData[key] = val;
            gridData[idx] = rData;
            return gridData;
        });
    }

    function handleAddRow() {
        setData((prev) => {
            const dupData = [...prev];
            if (
                dupData[dupData.length - 1]["Seller Name"] == undefined ||
                dupData[dupData.length - 1]["Seller Name"] == ""
            ) {
                alert("Seller Name is empty!");
                return prev;
            } else return [...prev, rowData];
        });
    }

    return (
        <>
            <div className="inward-page">
                <input type="date" />
                <input type="text" placeholder="Receipt Num" />
                <input type="text" placeholder="Party" />
            </div>

            <div className="grid">
                {data.map((rData, index) => (
                    <div key={index}>
                        {Object.keys(rData).map((key, idx) => (
                            <input
                                key={idx}
                                type={
                                    numberTypes.includes(key)
                                        ? "number"
                                        : "text"
                                }
                                onChange={(e) =>
                                    handleInputChange(
                                        e.target.value,
                                        key,
                                        index
                                    )
                                }
                                placeholder={key}
                            />
                        ))}
                    </div>
                ))}
            </div>
            <button className="btn-addRow" onClick={handleAddRow}>
                Add Row
            </button>
        </>
    );
};

export default Inward;
