const express = require('express');
const cors = require('cors');
const { snapshot } = require('node:test');

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


var store = {};
var backup = {};

//tableExists
function tableExists(tableName)
{
    if (!store[tableName])
        return false;
    return true;
}
//create
function create(tableName)
{
    store[tableName] = {};
}

//get
function get()
{
    var result = {};
    for (var [tableName, tableData] of Object.entries(store))
    {
        var innerTable = {};
        for (var [key, value] of Object.entries(tableData))
        {
            if (isExpired(value.expiry))
                delete tableData[key];
            else
                innerTable[key] = value;
        }
        result[tableName] = innerTable;
    }
    return result;
}
//update
function update(tableName, id, updatedData)
{
    if (!tableExists(tableName))
    {
        console.log("table does not exists")
        return false;
    }

    var expiry = store[tableName][id][expiry];
    var newData = { expiry, updatedData };
    store[tableName][id] = newData;
    return true;
}

//insert
function insert(tableName, id, data, expiry)
{
    if (!tableExists(tableName))
    {
        console.log("table does not exists")
        return false;
    }

    var expiry = expiry ? expiry + Date.now() : null;
    store[tableName][id] = { expiry, data };
    return true;
}

//delete
function deleteData(tableName, id)
{
    if (!tableExists(tableName))
    {
        console.log("table does not exists")
        return false;
    }

    delete store[tableName][id];
    return true;
}

//backup
function backupDb()
{
    for (var [tableName, tableData] of Object.entries(store))
    {
        var innerData = {};
        for (var [key, value] of Object.entries(tableData))
        {
            innerData[key] = value;
        }
        backup[tableName] = innerData;
    }
    return true;
}
//restore
function restore()
{
    store = backup;
}
//isExpired
function isExpired(expiry)
{
    return expiry != null && Date.now() > expiry;
}
create("books");
insert("books", 1, "priyam", 7000);
insert("books", 2, "sharma", 7000);
insert("books", 3, "tillsong", 7000);
insert("books", 4, "ontario", 7000);

backupDb();
deleteData("books", 2);
console.log(get());
restore();
console.log(get());

app.put("/", (req, res) =>
{
    create("books");
    insert("books", 1, "priyam", 7000);
    insert("books", 2, "sharma", 7000);
    insert("books", 3, "tillsong", 7000);
    insert("books", 4, "ontario", 7000);
    res.json("data added");
});

app.get("/", (req, res) =>
{
    var result = get();
    if (result)
        res.json(result)
    else
        res.status(400).json("add failed")
});

app.delete("/", (req, res) =>
{
    var success = deleteData("books", 2);
    if (success)
        res.json("deleted");
    else
        res.status(400).json("delete failed")
});

app.listen(5001, () =>
{
    console.log("Server is running on 5001")
})