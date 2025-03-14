import "./App.css";

function App() {
    return (
        <>
            <div className="container">
                <div className="heading">Invoices</div>
                <div className="info">
                    <div className="count">There are - {} invoices</div>
                    <div className="filter">Filter</div>
                    <div className="newInvoice">Add Invoice</div>
                </div>
            </div>
        </>
    );
}

export default App;
