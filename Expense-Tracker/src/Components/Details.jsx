import React,{useState, useEffect} from 'react';
function Details({setDetails})
{
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [date, setDate] = useState("2024-03-19");

    const handlePrice = (event) =>
    {
        setPrice(event.target.value);
    }

    const handleCategory = (e) =>
    {
        setCategory(e.target.value);
    }

    const handleDate = (e) =>
    {
        setDate(e.target.value);
    }

    useEffect(()=>{
        //console.log(price, category, date);
    }
    ,[price, category, date]);

    const handleAdd = ()=>
    {
        const newDetail = {"price": price,
                           "category": category,
                           "date" : date};
        setDetails(details => [...details, newDetail]);

        setPrice("");
        setCategory("");
    }
    //TODO: add a number check on the Price field
    return(
        <>
        <input id="id_input" className="inputDetials" type="number" value={price} placeholder="Enter the Price" onChange={ (event) => {handlePrice(event)}}></input>
        <br/>
        <input id="id_category" className="inputDetials" type="text" value={category} placeholder="Enter the Category" onChange={(event)=>{handleCategory(event)}}></input>
        <br/>
        <input id="id_date" className="inputDetials" type="date" name="category" min="2018-01-01" max="2099-12-31" value={date} onChange={(event)=>{handleDate(event)}}/>
        <br/>
        <button className="inputDetials" onClick={()=>handleAdd()}>Add Expense</button>
        </>
    )
}

export default Details;