import { useState } from "react";

const Outward = () => {
    const owRowData = {
        ItemName: "",
        Lot: "",
        Qty: "",
        Weight: "",
        Action: "",
    };

    const numberType = ["Lot", "Qty", "Weight"];

    const [outwardData, setOutwardData] = useState([owRowData]);

    function handleInputChange(val, inputField, index) {
        setOutwardData((prev) => {
            const dupData = [...prev];
            const rowData = dupData[index];

            rowData[inputField] = val;
            dupData[index] = rowData;
            return dupData;
        });
    }

    function handleAddRow() {
        setOutwardData((prev) => {
            if (
                prev[prev.length - 1].ItemName == undefined ||
                prev[prev.length - 1].ItemName == ""
            ) {
                alert("Item name is Empty !");
                return prev;
            } else return [...prev, owRowData];
        });
    }

    function handleDeleteRow(rowIdx) {
        console.log(rowIdx);
        setOutwardData((prev) => {
            if (prev.length <= 1) {
                alert("Cannot delete the last row!");
                return prev;
            }
            return prev.filter((item, idx) => idx !== rowIdx);
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
                {outwardData.map((data, index) => (
                    <div key={index}>
                        {Object.keys(data).map((key, idx) =>
                            key != "Action" ? (
                                <input
                                    value={data[key]}
                                    key={idx}
                                    onChange={(e) =>
                                        handleInputChange(
                                            e.target.value,
                                            key,
                                            index
                                        )
                                    }
                                    type={
                                        numberType.includes(key)
                                            ? "number"
                                            : "text"
                                    }
                                    placeholder={key}
                                />
                            ) : (
                                <button
                                    onClick={() => handleDeleteRow(index)}
                                    key={idx}
                                >
                                    Delete
                                </button>
                            )
                        )}
                    </div>
                ))}
            </div>
            <button className="btn-addRow" onClick={handleAddRow}>
                Add Row
            </button>
        </>
    );
};

export default Outward;
