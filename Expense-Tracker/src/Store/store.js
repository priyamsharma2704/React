import { create } from "zustand";

export const useShowExpenseModalStore = create((set) => ({
    showExpenseModal: false,
    setShowExpenseModal: (flag) => set((state) => ({ showExpenseModal: flag }))
}));

export const useExpensesListStore = create((set) => ({
    expenseList: [],
    addExpense: (expense) => set((state) => ({ expenseList: [...state.expenseList, expense] })),
    deleteExpense: (id) => set((state) =>
    {
        state.expenseList.splice(id, 1);
        return { expenseList: state.expenseList }
    }),
    updateExpense: (expense, id) => set((state) =>
    {
        state.expenseList[i] = expense;
        return { expenseList: state.expenseList };
    })
}))

export const useExpenseDetailsStore = create((set) =>
({
    price: "",
    category: "",
    date: "",
    setPrice: (prc) => set((state) =>
    {
        return { price: prc };
    }),
    setCategory: (cat) => set((state) => ({ category: cat })),
    setDate: (dte) => set((state) => ({ date: dte }))
}))