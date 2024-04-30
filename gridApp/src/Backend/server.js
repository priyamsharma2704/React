const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/api", (req, res) => {
    res.json({
        "data": 123
    })
})

app.listen(5000, () => {
    console.log("server started at 5000");
})