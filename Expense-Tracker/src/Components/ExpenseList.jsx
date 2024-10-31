import React from "react";
import deleteImg from "../assets/delete.svg";
import editImg from "../assets/edit.svg";
import { useState } from "react";
import ExpenseModal from "./ExpenseModal";
import {
    useShowExpenseModalStore,
    useExpensesListStore,
} from "../Store/store.js";
function ExpenseList() {
    const { showExpenseModal, setShowExpenseModal } =
        useShowExpenseModalStore();

    const { expenseList, deleteExpense, updateExpense } =
        useExpensesListStore();

    function handleAdd() {
        setShowExpenseModal(!showExpenseModal);
    }

    function handleDeleteExpense(id) {
        console.log(id);
        deleteExpense(id);
    }

    function handleEditExpense() {}

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
                    <div className="controls">
                        {/* <span className="date">{expense.date}</span> */}
                        <img
                            className="image"
                            src={deleteImg}
                            onClick={() => handleDeleteExpense(idx)}
                        />
                        <img
                            className="image"
                            src={editImg}
                            onClick={handleEditExpense}
                        />
                    </div>
                </div>
            ))}
            <button className="btnAddExpense" onClick={() => handleAdd()}>
                Add Expense
            </button>
        </>
    );
}

export default ExpenseList;
