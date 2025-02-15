import { useState } from "react";

const Inward = () => {
    const rowData = {
        itemName: "",
        plot: "",
        qty: "",
        unit: "",
        rate: "",
        weight: "",
        otherExpense: "",
        sellerName: "",
    };

    const [data, setData] = useState([rowData]);
    const [row, setRow] = useState({});

    function handleInputChange(val, inputField, idx) {
        console.log(val, inputField, idx);
    }
    function handleAddRow() {
        setData((...prev) => [...data, rowData]);
    }

    return (
        <>
            <div className="inward-page">
                <input type="date" />
                <input type="text" placeholder="Receipt Num" />
                <input type="text" placeholder="Party" />
            </div>

            <div className="grid">
                {data.map((rData, idx) => (
                    <div key={idx}>
                        <input
                            type="text"
                            onChange={(e) =>
                                handleInputChange(
                                    e.target.value,
                                    "itemName",
                                    idx
                                )
                            }
                            placeholder="Item Name"
                        />
                        <input type="text" placeholder={rData.plot} />
                        <input type="text" placeholder={rData.qty} />
                        <input type="text" placeholder={rData.unit} />
                        <input type="text" placeholder={rData.rate} />
                        <input type="text" placeholder={rData.weight} />
                        <input type="text" placeholder={rData.otherExpense} />
                        <input type="text" placeholder={rData.sellerName} />
                    </div>
                ))}
            </div>
            <button onClick={handleAddRow}>Add Row</button>
        </>
    );
};

export default Inward;
