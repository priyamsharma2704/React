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
        let adp = new jqx.dataAdapter(source);
        setAdapter(adp);
        console.log(adp);
      });
  },[]);



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
