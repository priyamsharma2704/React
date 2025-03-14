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
        setShowExpenseModal(!showExpenseModal);
        setIsInEditMode(!isInEditMode);
        console.log(isInEditMode);
    }

    function closeModal() {
        setIsInEditMode(false);
    }

    return (
        <>
            <div className="expenseList">
                {expenseList.map((expense, idx) => (
                    <ExpenseCard
                        key={idx}
                        id={idx}
                        expense={expense}
                    ></ExpenseCard>
                ))}
            </div>
            <button className="btnAddExpense" onClick={() => handleAdd()}>
                Add Expense
            </button>

            {isInEditMode && (
                <ExpenseModal
                    isInEditMode={isInEditMode}
                    closeModal={closeModal}
                ></ExpenseModal>
            )}
        </>
    );
}

export default ExpenseList;
