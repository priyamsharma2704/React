import React, { useState } from "react";
import JqxGrid from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';
import JqxInput from "jqwidgets-scripts/jqwidgets-react-tsx/jqxinput";
import "jqwidgets-scripts/jqwidgets/styles/jqx.base.css";
import "jqwidgets-scripts/jqwidgets/styles/jqx.material.css";

function Grid()
{
    const [user, setUser] = useState(1);
    const source = {
        datafield:[
            {name:"userId"},
            {name:"id"},
            {name:"title"}
        ],
        data:{
            userId:user
        },
        datatype:"json",
        id:"id",
        url:"https://jsonplaceholder.typicode.com/albums"
    };
    console.log("setting dataAdapter");
    const adapter = new jqx.dataAdapter(source);

    return(
        <>
            <div>this is grid component</div>
            <JqxGrid
            width="100%"
            source={adapter}
            columns={[
              {
                text: "userId",
                datafield: "userId",
                width: "100"
              },
              {
                text: "id",
                datafield: "id",
                width: "100"
              },
              {
                text: "title",
                datafield: "title"
              }
            ]}
            pageable={true}
            autoheight={true}
            sortable={true}
            theme="material"/>
        </>
    )
}

export default Grid;