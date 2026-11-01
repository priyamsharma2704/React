const express = require('express');
const cors = require("cors");

const app = express();
app.use(cors());

app.get('/repo', (req:string, res:any)=>{
    res.json({"data":1234});
});

app.listen(5000, ()=>{
    console.log("Server running at 5000");
});