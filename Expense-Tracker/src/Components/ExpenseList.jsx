import React from "react";

function ExpenseList() {
    function handleAdd() {}
    function handlePrice() {}
    function handleCategory() {}
    function handleDate() {}

    return (
        <>
            <div>ExpenseList</div>
            <input
                id="id_input"
                className="inputDetials"
                type="number"
                placeholder="Enter the Price"
                onChange={(event) => {
                    handlePrice(event);
                }}
            ></input>
            <br />
            <input
                id="id_category"
                className="inputDetials"
                type="text"
                placeholder="Enter the Category"
                onChange={(event) => {
                    handleCategory(event);
                }}
            ></input>
            <br />
            <input
                id="id_date"
                className="inputDetials"
                type="date"
                name="category"
                min="2018-01-01"
                max="2099-12-31"
                onChange={(event) => {
                    handleDate(event);
                }}
            />
            <button className="btnAddExpense" onClick={() => handleAdd()}>
                Add Expense
            </button>
        </>
    );
}

export default ExpenseList;
