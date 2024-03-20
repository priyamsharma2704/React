
function List({details})
{
    return(
        <>
        <ol className="expenseList">{details.map((item, index)=>(
            <li className="listItem" key={index}>
                <span className="spanItemPrice">$ {item.price}</span>
                <span className="spanItemCategory">{item.category}</span> 
                <span className="spanItemDate">{item.date}</span>
                <button className="btnEdit">Edit</button>
                <button className="btnDelete">Delete</button>
            </li>))}
        </ol>
        </>
    );
}

export default List;