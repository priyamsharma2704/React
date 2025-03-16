import { useState } from "react";
import "./App.css";

function App() {
    const [showAddInvoice, setShowAddInvoice] = useState(false);

    function showNewInvoiceModal() {
        setShowAddInvoice(!showAddInvoice);
    }

    function addItem() {
        console.log("add item");
    }
    return (
        <>
            <div className="container">
                <div className="heading">Invoices</div>
                <div className="info">
                    <div className="count">There are - {} invoices</div>
                    <div className="filter">Filter</div>
                    <div className="newInvoice">
                        <button onClick={showNewInvoiceModal}>
                            New Invoice
                        </button>
                    </div>
                </div>
            </div>
            {showAddInvoice ? (
                <div className="newInvoiceModal">
                    <div>
                        <span className="countrySpan">Bill From</span>
                    </div>

                    <input
                        className="country"
                        type="text"
                        placeholder="Country"
                    />
                    <div className="addressDiv">
                        <input
                            className="address"
                            type="text"
                            placeholder="City"
                        />
                        <input
                            className="address"
                            type="text"
                            placeholder="State"
                        />
                        <input
                            className="address"
                            type="text"
                            placeholder="Postal Code"
                        />
                    </div>
                    <br></br>
                    <div>
                        <span>Bill To</span>
                    </div>
                    <input type="text" placeholder="Name" />
                    <input type="text" placeholder="Email" />
                    <input type="text" placeholder="Street Name" />
                    <div className="addressDiv">
                        <input
                            type="text"
                            className="address"
                            placeholder="City"
                        />
                        <input
                            type="text"
                            className="address"
                            placeholder="State"
                        />
                        <input
                            type="text"
                            className="address"
                            placeholder="Postal Code"
                        />
                    </div>
                    <div className="dates">
                        <input className="date" type="date" />
                        <input className="dateValidity" type="text" />
                        {/* make it drop down */}
                    </div>
                    <input type="text" placeholder="Project Description" />
                    <br></br>
                    <div>
                        <span>Item List</span>
                    </div>
                    <button onClick={addItem}>Add Item</button>
                    <div></div>
                </div>
            ) : null}
        </>
    );
}

export default App;
