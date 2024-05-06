import { useState } from 'react'
//import './App.css'
import './style.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='font-thin'>hello</div>
      <div className='font-thin'>hello</div>
      <div className='font-thin text-red-500'>hello</div>
      <div className='container mx-auto columns-2'>
      <input type='text'placeholder='Search...' className='rounded-md pl-3'></input>
      <img src="./assets/react.svg"></img>
      </div>
      
    </>
  )
}

export default App
