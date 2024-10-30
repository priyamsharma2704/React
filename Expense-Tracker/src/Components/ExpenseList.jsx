import React from "react";
import { useState } from "react";
import ExpenseModal from "./ExpenseModal";
import {
    useShowExpenseModalStore,
    useExpensesListStore,
} from "../Store/store.js";
function ExpenseList() {
    const { showExpenseModal, setShowExpenseModal } =
        useShowExpenseModalStore();

    const { expenseList } = useExpensesListStore();

    function handleAdd() {
        setShowExpenseModal(!showExpenseModal);
    }

    function handlePrice() {}
    function handleCategory() {}
    function handleDate() {}

    return (
        <>
            <div></div>
            {/* TODO: Add Edit and Delete buttons */}
            {expenseList.map((expense, idx) => (
                <div key={idx} className="div_expense">
                    <span className="category">{expense.category}</span>
                    <span className="price">${expense.price}</span>
                    <div className="date">{expense.date} </div>
                </div>
            ))}
            <button className="btnAddExpense" onClick={() => handleAdd()}>
                Add Expense
            </button>
        </>
    );
}

export default ExpenseList;
