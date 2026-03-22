const express = require("express");
const cors = require("cors");
const { table } = require("node:console");


const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


var store = {};
var backup = {};

function createTable(tableName)
{
    if (store[tableName])
    {
        console.log("table already exists")
        return false;
    }
    store[tableName] = {};
    return true;
}

function tableExists(tableName)
{
    if (store[tableName])
        return true;
    return false;
}

function insert(tableName, id, data, expiry = null)
{
    if (!tableExists(tableName))
    {
        console.log("table does not exists");
        return false;
    }

    var expiryVal = expiry ? expiry + Date.now() : null;
    var tableData = { expiryVal, data }
    store[tableName][id] = tableData;
    return true;
}

function getAll()
{
    var result = {};
    for (var [tableName, table] of Object.entries(store))
    {
        var innerTable = {};
        for (var [key, value] of Object.entries(table))
        {
            if (isExpired(value.expiryVal))
                delete table[key];
            else
                innerTable[key] = value;
        }
        result[tableName] = innerTable;
    }
    return result;
}

function isExpired(expiry)
{
    return expiry !== null && Date.now() > expiry;
}

function snapshot()
{
    for (var [tableName, tableData] of Object.entries(store))
    {
        backup[tableName] = {};
        for (var [key, val] of Object.entries(tableData))
            backup[tableName][key] = val;
    }
}

function restore()
{
    store = backup;
}

function deleteData(tableName, id)
{
    if (!tableExists(tableName))
        console.log("table does not exists");

    delete store[tableName][id];
    return true;
}
//----------------------------
createTable("Prods");
insert("Prods", 1, "phone", 10000);
insert("Prods", 2, "cover", 10000);
insert("Prods", 3, "book", 10000);
insert("Prods", 4, "glasses", 10000);

snapshot();
console.log(getAll());
deleteData("Prods", 1);
console.log(getAll());
restore();

console.log("restore", getAll());




app.get("/", (req, res) =>
{
    insert("Prods", 1, "phone", 10000);
    insert("Prods", 2, "cover", 10000);
    insert("Prods", 3, "book", 10000);
    insert("Prods", 4, "glasses", 10000);

    res.json("data added")
});

app.get("/prods", (req, res) =>
{
    var data = getAll();
    res.json(data);
})

app.put("/prods", (req, res) =>
{
    var param = req.body;
    console.log(param)
    var success = insert(param.table, param.id, param.data, param.expiry);
    if (!success)
        return res.status(400).json("cannot insert")
    res.json("insert done")
});

// app.listen(5000, () =>
// {
//     console.log("server is running");
// });
