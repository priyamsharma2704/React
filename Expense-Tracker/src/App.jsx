import Details from './Components/Details.jsx';
import List from './Components/List.jsx';
import Charts from './Components/Chart.jsx';
import './App.css';
import React,{useState, useEffect} from 'react';
function App()
{
    const [details, setDetails] = useState([]);

    //to print the details info
    useEffect(()=>{
        console.log(details);
    }, [details]);

    return(
      <>
      <Details setDetails={setDetails}></Details>
      <hr></hr>
      <List details={details}></List>
      <Charts details={details}></Charts>
      </>
    )
}

export default App;