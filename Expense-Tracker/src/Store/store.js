import { create } from "zustand";

export const useShowExpenseModalStore = create((set) => ({
    showExpenseModal: false,
    setShowExpenseModal: () => set((state) => {
        let newState = !state.showExpenseModal;
        return { showExpenseModal: newState }
    })
}));

export const useExpensesListStore = create((set) => ({
    expenseList: [],
    addExpense: (expense) => set((state) => ({ expenseList: [...state.expenseList, expense] })),
    deleteExpense: (id) => set((state) => {
        state.expenseList.splice(id, 1);
        return { expenseList: state.expenseList }
    }),
    updateExpense: (expense, id) => set((state) => {
        state.expenseList[i] = expense;
        return { expenseList: state.expenseList };
    })
}))