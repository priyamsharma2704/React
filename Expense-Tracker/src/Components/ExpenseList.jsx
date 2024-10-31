import React from "react";
import ExpenseCard from "./ExpenseCard.jsx";
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

    return (
        <>
            <div></div>
            {/* TODO: Add Edit and Delete buttons */}
            {expenseList.map((expense, idx) => (
                <ExpenseCard key={idx} id={idx} expense={expense}></ExpenseCard>
            ))}
            <button className="btnAddExpense" onClick={() => handleAdd()}>
                Add Expense
            </button>
        </>
    );
}

export default ExpenseList;
