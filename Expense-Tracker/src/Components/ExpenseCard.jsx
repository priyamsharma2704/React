import deleteImg from "../assets/delete.svg";
import editImg from "../assets/edit.svg";
import ExpenseModal from "./ExpenseModal.jsx";
import { useState } from "react";
import {
    useShowExpenseModalStore,
    useExpensesListStore,
    useExpenseDetailsStore,
} from "../Store/store.js";
function ExpenseCard({ id, expense }) {
    const { showExpenseModal, setShowExpenseModal } =
        useShowExpenseModalStore();

    const { expenseList, deleteExpense, updateExpense } =
        useExpensesListStore();
    const { setCategory, setPrice, setDate } = useExpenseDetailsStore();

    const [isInEditMode, setIsInEditMode] = useState(false);
    function handleDeleteExpense(id) {
        console.log(id);
        deleteExpense(id);
    }

    function handleEditExpense() {
        console.log(expense);
        setPrice(expense.price);
        setCategory(expense.category);
        setDate(expense.date);
        // setShowExpenseModal(!showExpenseModal);
        setIsInEditMode(!isInEditMode);
    }

    function closeModal() {
        setIsInEditMode(false);
    }
    return (
        <>
            <div className="div_expense">
                <span className="category">{expense.category}</span>
                <span className="price">${expense.price}</span>
                <div className="date">{expense.date} </div>
                <div className="controls">
                    <img
                        className="image"
                        src={deleteImg}
                        onClick={() => handleDeleteExpense(id)}
                    />
                    <img
                        className="image"
                        src={editImg}
                        onClick={() => handleEditExpense()}
                    />
                </div>
            </div>

            {isInEditMode ? (
                <ExpenseModal
                    id={id}
                    expense={expense}
                    closeModal={closeModal}
                ></ExpenseModal>
            ) : (
                <span></span>
            )}
        </>
    );
}

export default ExpenseCard;
