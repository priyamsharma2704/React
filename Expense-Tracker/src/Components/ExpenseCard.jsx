import deleteImg from "../assets/delete.svg";
import editImg from "../assets/edit.svg";
import {
    useShowExpenseModalStore,
    useExpensesListStore,
} from "../Store/store.js";
function ExpenseCard({ id, expense }) {
    const { showExpenseModal, setShowExpenseModal } =
        useShowExpenseModalStore();

    const { expenseList, deleteExpense, updateExpense } =
        useExpensesListStore();
    function handleDeleteExpense(id) {
        console.log(id);
        deleteExpense(id);
    }

    function handleEditExpense() {
        setShowExpenseModal();
    }
    return (
        <>
            <div className="div_expense">
                <span className="category">{expense.category}</span>
                <span className="price">${expense.price}</span>
                <div className="date">{expense.date} </div>
                <div className="controls">
                    {/* <span className="date">{expense.date}</span> */}
                    <img
                        className="image"
                        src={deleteImg}
                        onClick={() => handleDeleteExpense(id)}
                    />
                    <img
                        className="image"
                        src={editImg}
                        onClick={handleEditExpense}
                    />
                </div>
            </div>
        </>
    );
}

export default ExpenseCard;
