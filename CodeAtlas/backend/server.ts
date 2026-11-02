const express = require('express');
const cors = require("cors");

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
    return res.json();
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