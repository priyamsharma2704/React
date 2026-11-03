const express = require('express');
const cors = require("cors");
import type {GitHubTreeEntry, DirectoryNode} from "../types";

const app = express();
app.use(cors());
app.use(express.json());

app.post('/repo', (req:any, res:any)=>{
    const { repoUrl } = req.body;
    console.log(repoUrl);

    let {owner, repo} = parseUrl(repoUrl);

    //call github api
    getRepoData(owner, repo).then((data)=>{ 
        //console.log(data);
        return res.json(data)
    });
});

async function getRepoData(owner:string, repo:string)
{
    let branch = "main";
    let res = await fetch(`https://api.github.com/repos/${owner}/${repo}/git/trees/${branch}?recursive=1`);
    const data = await res.json();
    let formattedData = formatResponse(data.tree);
    return formattedData;
}

function formatResponse(entries:GitHubTreeEntry[]) : DirectoryNode 
{
    const root : DirectoryNode = {
        id:"root",
        name: "root",
        path: "",
        type: "directory",
        children: []
    };

    for (const entry of entries) {
    const parts = entry.path.split("/");
    let current = root;

    parts.forEach((part, index) => {
      const isLast = index === parts.length - 1;

      const path = parts.slice(0, index + 1).join("/");

      let child = current.children!.find(
        (node) => node.name === part
      );

      if (!child) {
        child = {
          id: path,
          name: part,
          path,
          type: isLast && entry.type === "blob"
            ? "file"
            : "directory",
          children: [],
        };

        current.children!.push(child);
      }

      // Store GitHub metadata on the actual entry
      if (isLast) {
        child.sha = entry.sha;
        child.size = entry.size;

        if (entry.type === "blob") {
          child.type = "file";
          delete child.children;
        }
      }

      if (child.type === "directory") {
        current = child;
      }
    });
  }

  return root;
}

function parseUrl(url:string)
{
    let repoUrl = new URL(url);
    let [owner, repo] = repoUrl.pathname.split("/").filter(Boolean);

    if(repoUrl.hostname != "github.com")
        throw new Error("Enter a Github repo URL");

    return ({owner, repo:repo.replace(/\.git$/, '')});
}

app.listen(5000, ()=>{
    console.log("Server running at 5000");
});