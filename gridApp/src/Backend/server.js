const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/api", (req, res) => {
    res.json([
      {
        Nodes: "3,711",
        Elements: "720",
        SolutionTime: "3s ",
        RAMUsed: "0.53 GB",
        IORead: "0.00 GB",
        IOWrite: "0.00 GB",
        ElementLoadBalanceRatio: "1.241",
        "SMP/DMP": "DMP",
        CoresUsed: "4",
        DateAndTimeOfRun: "03/18/2024 03:10 PM",
      },
      {
        Nodes: "3,711",
        Elements: "720",
        SolutionTime: "9s ",
        RAMUsed: "0.79 GB",
        IORead: "0.00 GB",
        IOWrite: "0.00 GB",
        ElementLoadBalanceRatio: "1.345",
        "SMP/DMP": "DMP",
        CoresUsed: "6",
        DateAndTimeOfRun: "03/18/2024 03:11 PM",
      },
      {
        Nodes: "3,711",
        Elements: "720",
        SolutionTime: "6s ",
        RAMUsed: "1.30 GB",
        IORead: "0.00 GB",
        IOWrite: "0.00 GB",
        ElementLoadBalanceRatio: "1.391",
        "SMP/DMP": "DMP",
        CoresUsed: "10",
        DateAndTimeOfRun: "03/18/2024 03:57 PM",
      },
    ])
})

app.listen(5000, () => {
    console.log("server started at 5000");
})