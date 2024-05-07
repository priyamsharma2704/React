import React, { useState, useEffect } from "react";
import JqxGrid from "jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid";
import "jqwidgets-scripts/jqwidgets/styles/jqx.base.css";
import "jqwidgets-scripts/jqwidgets/styles/jqx.material.css";

function Grid() {
    const [adapter, setAdapter] = useState();

    useEffect(() => {
        console.log("useEffect");
        fetch("http://localhost:5000/api")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);

                const source = {
                    datafield: [
                        { name: "Nodes" },
                        { name: "Elements" },
                        { name: "SolutionTime" },
                        { name: "RAMUsed" },
                        { name: "IORead" },
                        { name: "IOWrite" },
                        { name: "ElementLoadBalanceRatio" },
                        { name: "SMP/DMP" },
                        { name: "CoresUsed" },
                        { name: "DateAndTimeOfRun" },
                    ],
                    datatype: "json",
                    localdata: data,
                };

                console.log("setting dataAdapter");
                let adp = new jqx.dataAdapter(source);
                setAdapter(adp);
                console.log(adp);
            });
    }, []);

    const handleCellRender = (columnHeaderElement) =>{
        console.log("cell render")
    }
    return (
        <>
            <div className="gridClass">
                this is grid component
                <JqxGrid
                    width="900px"
                    source={adapter}
                    columns={[
                        {
                            text: "Nodes",
                            datafield: "Nodes",
                            width: "7%", cellsalign:"center", align:"center", rendered:handleCellRender
                        },
                        {
                            text: "Elements",
                            datafield: "Elements",
                            width: "7%",
                        },
                        {
                            text: "Solution Time",
                            datafield: "SolutionTime",
                            width: "11%",
                        },
                        { text: "RAM Used", datafield: "RAMUsed", width: "10%" },
                        { text: "IORead", datafield: "IORead", width: "10%" },
                        { text: "IOWrite", datafield: "IOWrite", width: "10%" },
                        {
                            text: "E/B Ratio",
                            datafield: "ElementLoadBalanceRatio",
                            width: "10%",
                        },
                        { text: "SMP/DMP", datafield: "SMP/DMP", width: "10%" },
                        { text: "CoresUsed", datafield: "CoresUsed", width: "10%" },
                        {
                            text: "Date & Time",
                            datafield: "DateAndTimeOfRun",
                            minwidth: "7%",
                        },
                    ]}
                    pageable={true}
                    autoheight={true}
                    sortable={true}
                    theme="material"
                />
            </div>
        </>
    );
}

export default Grid;
