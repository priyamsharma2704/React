import { useContext, useEffect, useState, createContext } from "react";
import Search from "./Components/Search.jsx";
import Hook from "./Components/hook.jsx";
import Ansys from "./Components/Ansys.jsx";

function App() {
    return (
        <>
            {/* <Search></Search> */}

            <Hook></Hook>

            <Ansys></Ansys>
        </>
    );
}

// function App() {
//   const [users, setUsers] = useState([]);
//   const [input, setInput] = useState("");
//   const [people, setPeople] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [show, setShow] = useState(true);
//   const [products, setProducts] = useState([]);

//   let getUsers = async () => {
//     let resp = await fetch("https://reqres.in/api/users?");
//     let data = await resp.json();
//     console.log(data.data);
//     setUsers(data.data);
//   };

//   function handleInputChange(e)
//   {
//     console.log(e.target.value);
//     setInput(e.target.value);
//   }

//   function handleInputChange2(e)
//   {
//     if(e.target.value == "Hello")
//         alert("Passed")
//   }

//   function handleInputSearch(e)
//   {
//     setSearchTerm(e.target.value);
//   }

//   const filteredPeople = people.filter((person)=>person.toLowerCase().includes(searchTerm.toLowerCase()));

//   function handleBtnShowHide()
//   {
//     //console.log("show")
//     show? setShow(false): setShow(true);
//   }

//   useEffect(() => {
//     getUsers();

//     const people = [
//         "Shashi Koshy",
//         "Dhriti Taneja",
//         "Dipa Mishra",
//         "Ansh Thakkar",
//         "Lakshmi Thaker",
//         "Sushila Matthai",
//         "Shresth Nigam",
//         "Bhavana Biswas",
//         "Vasudha Mangat",
//         "Priya Saran"
//       ];

//     setPeople(people);

//     getProducts();

//   }, []);

//   //-----------------------------------------------------------------------------
//   const fruits = ["Apples", "Oranges", "Bananas", "Peaches", "Watermelons", "Grapes", "Leeche"];
//   const [search2, setSearch2] = useState("");

//   function handleSearch2(e)
//   {
//     setSearch2(e.target.value);
//     //console.log(e.target.value)
//   }
//   const filteredFruits = fruits.filter((fruit)=>(fruit.toLowerCase().includes(search2.toLowerCase())));

//   //--------------------------------------------

//   const getProducts = async()=>
//     {
//         const resp = await fetch("https://fakestoreapi.com/products");
//         const data = await resp.json();
//         console.log(data);
//         setProducts(data);
//     }
//   //--------------------------------------------------------------------------------------

//   return (
//     <>
//       <ul>
//         {users.map((user) => (
//             <li key={user.id}>{user.first_name}</li>
//         ))}
//       </ul>
//       <hr></hr>

//       <input type="text" onChange={(e)=>handleInputChange(e)}></input>
//       <p>{input}</p>

//       <hr></hr>
//       <input type="text" onChange={(e)=>handleInputChange2(e)} placeholder="type 'Hello'"></input>

//       <hr></hr>
//       <input type="text" onChange={(e)=>handleInputSearch(e)}></input>

//       <ul>
//         {filteredPeople.map((p,index) => (<li key={index}>{p}</li>))}
//       </ul>

//       <hr></hr>
//       {show? <button>BTN 1</button>: <></>}
//       <button onClick={handleBtnShowHide}>Show/Hide Btn 1</button>

//       <hr></hr>
//       <input type="text" onChange={(e)=>handleSearch2(e)}></input>
//       <ul>
//         {filteredFruits.map((fruit,index)=>(<li key={index}>{fruit}</li>))}
//       </ul>

//       <hr></hr>

//       <ul>
//         {products.map((product)=>(<li key={product.id}>{product.title}</li>))}
//       </ul>

//       <hr></hr>

//       <testContext.Provider value="test 123">
//         <Comp1></Comp1>
//       </testContext.Provider>
//       <hr></hr>
//       <Component1></Component1>

//     </>
//   );
// }

// function Comp1()
// {
//     let context = useContext(testContext);
//     return(
//         <>
//           Comp1 {context}
//         </>
//     );
// }

export default App;
