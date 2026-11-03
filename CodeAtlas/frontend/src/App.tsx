import { useState } from 'react'
import './App.css'
import Tree from './Components/Tree'
import type { DirectoryNode } from '../../types';

function App() {
    const [repoUrl, setRepoUrl] = useState("Enter Repo URL");
    const [treeData, setTreeData] = useState<DirectoryNode | null>(null);

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
        setTreeData(res);
    }

  return (
    <div id="app">
        <input id="id_repoUrlInput" placeholder='Enter Repo URL' onChange={(e)=>{setRepoUrl(e.target.value)}}></input>
        <button id="btn_submit" onClick={handleSubmit}>Submit</button>
        <Tree data={treeData}></Tree>
    </div>
  )
}

export default App
