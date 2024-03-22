import express from "express";
import cors from "cors";

//const express = require('express');
const app = express();

app.use(cors());

app.get("/api", (req, res) => {
    res.json({hello:123});
});

app.listen(4000, ()=>{
    console.log("Server started on 4000");
});