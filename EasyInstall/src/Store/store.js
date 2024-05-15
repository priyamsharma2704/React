import {create} from 'zustand';
import {appList} from '../GlobalVars/Golbal.js';
export const useAppStore = create((set) =>
({
    appsList: [],
    addAppToCart:(app) => set((state) => ({appsList: [...state.appsList, app]})),

    /*
        When using React, you should never mutate the state directly. If an object (or Array, which is an object too) is changed, you should create a new copy.
        Others have suggested using Array.prototype.splice(), but that method mutates the Array, so it's better not to use splice() with React.
        Easiest to use Array.prototype.filter() to create a new array:
    */
    removeAppFromCart:(appName) =>set((state) => ({appsList: state.appsList.filter(function(list){return list != appName;})})),
    clearCart:  () => set({cart: []})
}));

export const useItemStore = create((set) => ({
    cartItems: 0,
    addItem: () => set((state) => ({cartItems: state.cartItems + 1})),
    removeItem: () => set((state) => ({cartItems: state.cartItems - 1}))
}));

export const useSearchStore = create((set) => ({
    searchItem:"",
    setSearchItem: (item)=>set((state) => ({searchItem: item})),
    filteredItems:appList,
    setFilteredItems: (item)=>set((state) =>({filteredItems: item}))
}));
