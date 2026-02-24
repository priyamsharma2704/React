const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
    res.json({ key: "value" });
});

app.listen(5000, () => {
    console.log("server is running");
});
