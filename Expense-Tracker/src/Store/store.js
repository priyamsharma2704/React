import { create } from "zustand";

export const useShowExpenseModalStore = create((set) => ({
    showExpenseModal: false,
    setShowExpenseModal: () => set((state) =>
    {
        let newState = !state.showExpenseModal;
        return { showExpenseModal: newState }
    })
}));

export const useExpensesListStore = create((set) => ({
    expenseList: [],
    addExpense: (expense) => set((state) => ({ expenseList: [...state.expenseList, expense] }))
}))