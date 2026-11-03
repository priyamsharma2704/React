import { useState } from 'react'
import './App.css'
import Tree from './Components/Tree'
import type { DirectoryNode } from '../../types';

function App() {
    const [repoUrl, setRepoUrl] = useState("");
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
        <form
            className="repo-form"
            onSubmit={(event) => {
                event.preventDefault();
                void handleSubmit();
            }}
        >
            <input
                id="id_repoUrlInput"
                aria-label="GitHub repository URL"
                placeholder="Enter GitHub repository URL"
                value={repoUrl}
                onChange={(event) => setRepoUrl(event.target.value)}
            />
            <button id="btn_submit" type="submit">Analyze repository</button>
        </form>

        <main className="workspace">
            <section className="workspace-panel tree-panel" aria-label="Repository tree">
                <h2>Repository tree</h2>
                <Tree data={treeData}></Tree>
            </section>
            <section className="workspace-panel reserved-panel" aria-label="Relationship view">
                <h2>Relationships</h2>
                <p>Relationship view will appear here.</p>
            </section>
            <section className="workspace-panel reserved-panel" aria-label="Description">
                <h2>Description</h2>
                <p>Descriptions will appear here.</p>
            </section>
        </main>
    </div>
  )
}

export default App
