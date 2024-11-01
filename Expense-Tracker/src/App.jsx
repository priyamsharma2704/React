import ExpenseList from "./Components/ExpenseList.jsx";
import "./App.css";
import React, { useState, useEffect } from "react";
// import ExpenseModal from "./Components/ExpenseModal.jsx";
// import { useShowExpenseModalStore } from "./Store/store.js";
function App() {
    // const { showExpenseModal } = useShowExpenseModalStore();
    // console.log(showExpenseModal);
    /*TODO: 
             - Right Side Bar: Add a component to show the expenses in a list
             - Below that display a btn to Add an Expense. It will open a modal dialog that will allow to add new expense
             - Category should be a drop down. A new item should get added to the drop down list
    */

    return (
        <>
            <div className="container">
                <div className="header">header</div>
                <div className="mainBody">
                    <div className="leftSideBar">left</div>
                    <div className="chart">chart</div>
                    <div className="rightSideBar">
                        <ExpenseList></ExpenseList>
                    </div>
                </div>
                {/* {showExpenseModal ? (
                    <ExpenseModal></ExpenseModal>
                ) : (
                    <span></span>
                )} */}
            </div>
        </>
    );
}

export default App;
