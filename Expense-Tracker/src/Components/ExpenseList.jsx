import React from "react";
import { useState } from "react";
import ExpenseCard from "./ExpenseCard.jsx";
import ExpenseModal from "./ExpenseModal.jsx";
import {
    useShowExpenseModalStore,
    useExpensesListStore,
    useExpenseDetailsStore,
} from "../Store/store.js";

function ExpenseList() {
    const { showExpenseModal, setShowExpenseModal } =
        useShowExpenseModalStore();
    const { expenseList } = useExpensesListStore();
    const { setCategory, setPrice, setDate } = useExpenseDetailsStore();
    const [isInEditMode, setIsInEditMode] = useState(false);

    function handleAdd() {
        // setPrice("");
        // setCategory("");
        // setDate("");
        setShowExpenseModal(!showExpenseModal);
        setIsInEditMode(!isInEditMode);
    }

    function closeModal() {
        setIsInEditMode(false);
    }

    return (
        <>
            <div></div>
            {expenseList.map((expense, idx) => (
                <ExpenseCard key={idx} id={idx} expense={expense}></ExpenseCard>
            ))}
            <button className="btnAddExpense" onClick={() => handleAdd()}>
                Add Expense
            </button>

            {isInEditMode && (
                <ExpenseModal closeModal={closeModal}></ExpenseModal>
            )}
        </>
    );
}

export default ExpenseList;
