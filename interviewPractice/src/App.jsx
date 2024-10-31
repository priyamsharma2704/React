import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cornerstone from './Components/Cornerstone.jsx';
import Cornerstone2 from './Components/cornerStone2.jsx';
import CornerstoneTree from './Components/CornerstoneTree.jsx';
import Login from './Components/Login.jsx';

function App() {

  return(
    <>
    {/* <Cornerstone></Cornerstone> */}
    {/* <Cornerstone2></Cornerstone2> */}
    <CornerstoneTree></CornerstoneTree>
    {/* <Login></Login> */}
    </>
  );
}

export default App
