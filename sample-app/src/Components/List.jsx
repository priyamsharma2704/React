import {useState, useEffect} from 'react';
function List()
{
    const fruits = ["apples","bananas", "pineapples", "ornages"];

    const obj = [{name:"priyam", id:27},
                 {name:"avanya", id:12},
                 {name:"odin", id:21},
                 {name:"steve", id:502},
                 {name:"dhaichu", id:666}];

    obj.map((o,index)=>{
        console.log(o.name, o. id);
    })



    const [myArr,setMyArr] = useState([]); 
    const handleAdd = ()=>
    {
        var input = document.getElementById("id_input");
        //console.log(input.value);
        setMyArr(m=>[...m,input.value]);
    }



    const [dict, setDict] = useState({});
    const handleAddDictItem = ()=>
    {
        let input = document.getElementById("id_inputDict");
        //var temp = {"one":input.value};
        setDict(d=>({...d,one:input.value}))
    }

    useEffect(()=>
    {
        console.log(myArr);
        console.log(dict);
        fetch("http://localhost:4000/api")
        .then((res) => res.json().then(data=>console.log("backend = ",data)))
    },[myArr, dict]);



    return(
        <>
            <ol>
                {fruits.map((fruit, index)=><li key={index}>{fruit}</li>)}
            </ol>

            <ol>
                {obj.map((object, index)=><li key={index}>{object.name} : {object.id} : {index}</li>)}
            </ol>
            <br/>
            <p>To update array state:-</p>
            <input id="id_input" type='text' ></input>
            <button onClick={()=>handleAdd()}>Add</button>

            <p>To update Dictionary state:-</p>
            <input id="id_inputDict" type='text' ></input>
            <button onClick={()=>handleAddDictItem()}>Add</button>
        </>
    );
}

export default List;