import Details from "./Components/Details.jsx";
import List from "./Components/List.jsx";
import Charts from "./Components/Chart.jsx";
import ExpenseList from "./Components/ExpenseList.jsx";
import "./App.css";
import React, { useState, useEffect } from "react";
function App() {
    const [details, setDetails] = useState([]);

    //to print the details info
    useEffect(() => {
        console.log(details);
    }, [details]);

    /*TODO: 
             - Right Side Bar: Add a component to show the expenses in a list
             - Below that display a btn to Add an Expense. It will open a modal dialog that will allow to add new expense
             - 
    */

    function handleOpenAddExpenseDialog() {
        //TODO: Open Add Expense Modal Dialog
        console.log("open Modal");
    }
    return (
        <>
            <div className="container">
                <div className="header">header</div>
                <div className="mainBody">
                    <div className="leftSideBar">left</div>
                    <div className="chart">chart</div>
                    <div className="rightSideBar">
                        <ExpenseList
                            onClick={handleOpenAddExpenseDialog}
                        ></ExpenseList>
                    </div>
                </div>
            </div>
            {/* <Details setDetails={setDetails}></Details>

           <hr></hr>
           <List details={details}></List>
           <Charts details={details}></Charts> */}
        </>
    );
}

export default App;
