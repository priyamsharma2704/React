import React, { useState, useEffect } from "react";
import JqxGrid from "jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid";
import "jqwidgets-scripts/jqwidgets/styles/jqx.base.css";
import "jqwidgets-scripts/jqwidgets/styles/jqx.material.css";

function Grid() {
  //const [user, setUser] = useState(1);

  useEffect(() => {
    console.log("useEffect");
    fetch("http://localhost:5000/api")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data)
    })
  });

  const data = [
    {
      Nodes: "3,711",
      Elements: "720",
      SolutionTime: "3s ",
      RAMUsed: "0.53 GB",
      IORead: "0.00 GB",
      IOWrite: "0.00 GB",
      ElementLoadBalanceRatio: "1.241",
      "SMP/DMP": "DMP",
      CoresUsed: "4",
      DateAndTimeOfRun: "03/18/2024 03:10 PM",
    },
    {
      Nodes: "3,711",
      Elements: "720",
      SolutionTime: "9s ",
      RAMUsed: "0.79 GB",
      IORead: "0.00 GB",
      IOWrite: "0.00 GB",
      ElementLoadBalanceRatio: "1.345",
      "SMP/DMP": "DMP",
      CoresUsed: "6",
      DateAndTimeOfRun: "03/18/2024 03:11 PM",
    },
    {
      Nodes: "3,711",
      Elements: "720",
      SolutionTime: "6s ",
      RAMUsed: "1.30 GB",
      IORead: "0.00 GB",
      IOWrite: "0.00 GB",
      ElementLoadBalanceRatio: "1.391",
      "SMP/DMP": "DMP",
      CoresUsed: "10",
      DateAndTimeOfRun: "03/18/2024 03:57 PM",
    },
  ];

  const source = {
    datafield: [
      { name: "Nodes" },
      { name: "Elements" },
      { name: "SolutionTime" },
      // {name:"RAMUsed"},
      // {name:"IORead"},
      // {name:"IOWrite"},
      // {name:"ElementLoadBalanceRatio"},
      // {name:"SMP/DMP"},
      // {name:"CoresUsed"},
      // {name:"DateAndTimeOfRun"},
    ],
    datatype: "json",
    localdata: data,
  };
  console.log("setting dataAdapter");
  const adapter = new jqx.dataAdapter(source);

  return (
    <>
      <div className="gridClass">
        this is grid component
        <JqxGrid
          width="700px"
          source={adapter}
          columns={[
            {
              text: "Nodes",
              datafield: "Nodes",
              width: "100",
            },
            {
              text: "Elements",
              datafield: "Elements",
              width: "100",
            },
            {
              text: "SolutionTime",
              datafield: "SolutionTime",
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
