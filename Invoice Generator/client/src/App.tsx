import { useState } from "react";
import "./App.css";

function App() {
    const [showAddInvoice, setShowAddInvoice] = useState(false);

    function showNewInvoiceModal() {
        setShowAddInvoice(!showAddInvoice);
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
            {showAddInvoice ? <div className="newInvoiceModal">asd</div> : null}
        </>
    );
}

export default App;
