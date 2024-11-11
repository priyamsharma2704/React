import React from "react";
import {
    useExpensesListStore,
    useShowExpenseModalStore,
    useExpenseDetailsStore,
} from "../Store/store";
import { useEffect } from "react";
import close from "../assets/close.png";

function ExpenseModal({ id, expense, closeModal, isInEditMode }) {
    const { addExpense, updateExpense } = useExpensesListStore();
    const { showExpenseModal, setShowExpenseModal } =
        useShowExpenseModalStore();
    const { price, category, date, setCategory, setPrice, setDate } =
        useExpenseDetailsStore();

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
        1. DONE - clear all the fields after hitting Add
        2. DONE - Hide the modal
        3. DONE - If input fields are empty, then dont add and throw an error
        4. DONE - Add a Close button
         */
        if (!price && !category && !date) {
            alert("Please enter Price, category and Date");
            return;
        }
        let newExpense = { price, category, date };
        if (id != null) updateExpense(newExpense, id);
        else addExpense(newExpense);

        setPrice("");
        setCategory("");
        setDate("");
        setShowExpenseModal(false);
        closeModal();
    }

    function handleCloseModal() {
        closeModal();
    }

    useEffect(() => {
        if (expense != null) {
            setPrice(expense.price);
            setCategory(expense.category);
            setDate(expense.date);
        } else if (!id) {
            setPrice("");
            setCategory("");
            setDate("");
        }
    }, [expense]);

    return (
        <>
            <div className="expenseModal">
                <div className="closeSpan" onClick={handleCloseModal}>
                    <img className="closeImg" src={close} height="20"></img>
                </div>
                <input
                    id="id_input"
                    className="inputDetials"
                    type="number"
                    value={price}
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
                    value={category}
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
                    value={date}
                    name="category"
                    min="2018-01-01"
                    max="2099-12-31"
                    onChange={(event) => {
                        handleDateOnChange(event);
                    }}
                />
                <br />
                <button className="btnAddExpense" onClick={handleAddExpense}>
                    {isInEditMode == false ? "Add Expense" : "Update Expense"}
                </button>
            </div>
        </>
    );
}

export default ExpenseModal;
