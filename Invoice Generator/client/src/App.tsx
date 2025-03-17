import { useState } from "react";
import "./App.css";

interface InvoiceDetails {
    countryFrom: string;
    cityFrom: string;
    stateFrom: string;
    postalCodeFrom: string;
    name: string;
    email: string;
    streetName: string;
    cityTo: string;
    stateTo: string;
    postalCodeTo: string;
    projectDescription: string;
    date: string;
    dateValidity: string;
    itemDescription: string;
}

function App() {
    const [showAddInvoice, setShowAddInvoice] = useState(false);
    const [invoices, setInvoices] = useState<InvoiceDetails[]>([]);
    const [invoiceDetails, setInvoiceDetails] = useState<InvoiceDetails>(
        {} as InvoiceDetails
    );
    function showNewInvoiceModal() {
        setShowAddInvoice(!showAddInvoice);
    }

    function addItem() {
        console.log("add item");
    }

    function handleInputOnChange(value: string, key: string) {
        console.log(value, key);
        setInvoiceDetails((prev) => {
            return { ...prev, [key]: value };
        });
    }

    function saveInvoice() {
        console.log("save invoice");
        setInvoices((prev) => {
            return [...prev, invoiceDetails];
        });

        setShowAddInvoice(false);
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
                        onChange={(e) =>
                            handleInputOnChange(e.target.value, "countryFrom")
                        }
                    />
                    <div className="addressDiv">
                        <input
                            className="address"
                            type="text"
                            placeholder="City"
                            onChange={(e) =>
                                handleInputOnChange(e.target.value, "cityFrom")
                            }
                        />
                        <input
                            className="address"
                            type="text"
                            placeholder="State"
                            onChange={(e) =>
                                handleInputOnChange(e.target.value, "stateFrom")
                            }
                        />
                        <input
                            className="address"
                            type="text"
                            placeholder="Postal Code"
                            onChange={(e) =>
                                handleInputOnChange(
                                    e.target.value,
                                    "postalCodeFrom"
                                )
                            }
                        />
                    </div>
                    <br></br>
                    <div>
                        <span>Bill To</span>
                    </div>
                    <input
                        type="text"
                        placeholder="Name"
                        onChange={(e) =>
                            handleInputOnChange(e.target.value, "Name")
                        }
                    />
                    <input
                        type="text"
                        placeholder="Email"
                        onChange={(e) =>
                            handleInputOnChange(e.target.value, "Email")
                        }
                    />
                    <input
                        type="text"
                        placeholder="Street Name"
                        onChange={(e) =>
                            handleInputOnChange(e.target.value, "streetName")
                        }
                    />
                    <div className="addressDiv">
                        <input
                            type="text"
                            className="address"
                            placeholder="City"
                            onChange={(e) =>
                                handleInputOnChange(e.target.value, "cityTo")
                            }
                        />
                        <input
                            type="text"
                            className="address"
                            placeholder="State"
                            onChange={(e) =>
                                handleInputOnChange(e.target.value, "stateTo")
                            }
                        />
                        <input
                            type="text"
                            className="address"
                            placeholder="Postal Code"
                            onChange={(e) =>
                                handleInputOnChange(
                                    e.target.value,
                                    "postalCodeTo"
                                )
                            }
                        />
                    </div>
                    <div className="dates">
                        <input
                            className="date"
                            type="date"
                            onChange={(e) =>
                                handleInputOnChange(e.target.value, "date")
                            }
                        />
                        <input
                            className="dateValidity"
                            type="text"
                            onChange={(e) =>
                                handleInputOnChange(
                                    e.target.value,
                                    "dateValidity"
                                )
                            }
                        />
                        {/* make it drop down */}
                    </div>
                    <input
                        type="text"
                        placeholder="Item Description"
                        onChange={(e) =>
                            handleInputOnChange(
                                e.target.value,
                                "itemDescription"
                            )
                        }
                    />
                    <br></br>
                    <div>
                        <span>Item List</span>
                    </div>
                    <button onClick={addItem}>Add Item</button>
                    <div></div>
                    <button onClick={saveInvoice}>Save</button>
                </div>
            ) : null}

            <div>
                {" "}
                {invoices.map((invoice, id) => (
                    <div key={id}>{invoice.countryFrom}</div>
                ))}
            </div>
        </>
    );
}

export default App;
