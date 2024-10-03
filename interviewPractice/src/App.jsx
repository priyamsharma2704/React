import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cornerstone from './Components/Cornerstone.jsx';
import CornerstoneTree from './Components/CornerstoneTree.jsx';
import Login from './Components/Login.jsx';

function App() {

  return(
    <>
    {/* <Cornerstone></Cornerstone> */}
    {/* <Login></Login> */}
    <CornerstoneTree></CornerstoneTree>
    </>
  );
}

export default App
