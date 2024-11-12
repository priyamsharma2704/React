import ExpenseList from "./Components/ExpenseList.jsx";
import "./App.css";
import React, { useState, useEffect } from "react";
import Chart from "./Components/Chart.jsx";
import Left from "./Components/LeftBar.jsx";
import Header from "./Components/Header.jsx";
function App() {
    /*TODO: 
             - Right Side Bar: Add a component to show the expenses in a list
             - Below that display a btn to Add an Expense. It will open a modal dialog that will allow to add new expense
             - Category should be a drop down. A new item should get added to the drop down list
    */

    return (
        <>
            <div className="container">
                <div className="header">
                    <Header></Header>
                </div>
                <div className="mainBody">
                    <div className="leftSideBar">
                        <Left></Left>
                    </div>
                    <div className="chart">
                        <Chart></Chart>
                    </div>
                    <div className="rightSideBar">
                        <ExpenseList></ExpenseList>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
