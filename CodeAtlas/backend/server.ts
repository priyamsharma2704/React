const express = require('express');
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post('/repo', (req:any, res:any)=>{
    const { repoUrl } = req.body;
    console.log(repoUrl);

    let {owner, repo} = parseUrl(repoUrl);

    res.json({ owner, repo });
});

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