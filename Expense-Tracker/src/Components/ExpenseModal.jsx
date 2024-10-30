import React from "react";
import { useExpensesListStore } from "../Store/store";
import { useState } from "react";

function ExpenseModal() {
    const { addExpense } = useExpensesListStore();
    const [price, setPrice] = useState(null);
    const [category, setCategory] = useState(null);
    const [date, setDate] = useState(null);

    function handlePriceOnChange(e) {
        setPrice(e.target.value);
    }

    function handleDateOnChange(e) {
        setDate(e.target.value);
    }

    function handleCategoryOnChange(e) {
        setCategory(e.target.value);
    }

    function handleAddExpense() {
        /*TODO:
        1. clear all the fields after hitting Add
        2. Hide the modal
         */
        let newExpense = { price, category, date };
        addExpense(newExpense);
    }
    return (
        <>
            <div className="expenseModal">
                <input
                    id="id_input"
                    className="inputDetials"
                    type="number"
                    placeholder="Enter the Price"
                    onChange={(event) => {
                        handlePriceOnChange(event);
                    }}
                ></input>
                <br />
                <input
                    id="id_category"
                    className="inputDetials"
                    type="text"
                    placeholder="Enter the Category"
                    onChange={(event) => {
                        handleCategoryOnChange(event);
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
                        handleDateOnChange(event);
                    }}
                />
                <br />
                <button className="btnAddExpense" onClick={handleAddExpense}>
                    Add Expense
                </button>
            </div>
        </>
    );
}

export default ExpenseModal;
