const { snapshot } = require("node:test");
const { isIdentifier } = require("typescript");

var store = {};
var backup = {};

//---helpers---
//createTable
function createTable(tableName) {
    store[tableName] = {};
    return true;
}
//isExpired
function isExpired(expiry) {
    return expiry !== null && Date.now() > expiry;
}

//tableExists
function tableExists(tableName) {
    if (!store[tableName]) return false;
    return true;
}

//idExists
function idExists(tableName, id) {
    if (!store[tableName][id]) return false;
    return true;
}

//get
function get() {
    var result = {};
    for (var [tableName, tableData] of Object.entries(store)) {
        var innerData = {};
        for (var [key, value] of Object.entries(tableData)) {
            if (isExpired(value.expiry)) delete store[key];
            else innerData[key] = value;
        }
        result[tableName] = innerData;
    }
    return result;
}
//update
function update(tableName, id, data, expiry = null) {
    if (!tableExists(tableName)) {
        console.log("table does not exists");
        return false;
    }

    if (!idExists(tableName, id)) {
        console.log("id does not exists");
        return false;
    }

    var expiry = expiry ? expiry + Date.now() : store[tableName][id].expiry;
    store[tableName][id] = { expiry, data };
    return true;
}
//insert
function insert(tableName, id, data, expiry = null) {
    if (!tableExists(tableName)) {
        console.log("table does not exists");
        return false;
    }

    var expValue = expiry ? expiry + Date.now() : null;
    store[tableName][id] = { expiry: expValue, data };
}
//delete
function deleteData(tableName, id) {
    if (!tableExists(tableName)) {
        console.log("table does not exists");
        return false;
    }

    if (!idExists(tableName, id)) {
        console.log("id does not exists");
        return false;
    }
    delete store[tableName][id];
}
//backup
function backupStore() {
    // for (var [tableName, tableData] of Object.entries(store)) {
    //     var innerData = {};
    //     for (var [key, value] of Object.entries(tableData)) {
    //         if (isExpired(value.expiry)) delete store[key];
    //         else innerData[key] = value;
    //     }
    //     backup[tableName] = innerData;
    // }

    backup = JSON.parse(JSON.stringify(store));
}
//restore
function restore() {
    store = JSON.parse(JSON.stringify(backup));
}

createTable("books");
insert("books", 1, "aaaa");
insert("books", 2, "bbb");
insert("books", 3, "ccc", 6000);
insert("books", 4, "ddd");
console.log(get());

update("books", 3, "CCCCCc");
console.log(get());
backupStore();
deleteData("books", 3);
console.log(get());
restore();
console.log(get());
