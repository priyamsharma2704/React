import { useState } from 'react'
import './App.css'

function App() {
    const [repoUrl, setRepoUrl] = useState("");
    const [repoData, setRepoData] = useState({});

    async function handleSubmit()
    {
        console.log(repoUrl)
        const data  = await fetch("http://localhost:5000/repo",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ repoUrl })
            }
        );
        const res = await data.json();
        setRepoData(res);
    }

  return (
    <div id="app">
        <input id="id_repoUrlInput" placeholder='Enter Repo URL' onChange={(e)=>{setRepoUrl(e.target.value)}}></input>
        <button id="btn_submit" onClick={handleSubmit}>Submit</button>
        <div>{JSON.stringify(repoData)}</div>
    </div>
  )
}

export default App
