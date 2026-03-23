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
    var dataValue = { ...data };
    store[tableName][id] = { expiry: expValue, data: dataValue };
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
insert("books", 1, { author: "aaaa", year: 2006, title: "zzz" });
insert("books", 2, { author: "bbb", year: 2005, title: "baa" });
insert("books", 3, { author: "ccc", year: 2004, title: "caaa" }, 6000);
insert("books", 4, { author: "ddd", year: 2003, title: "daaa" });
console.dir(get(), { depth: null });

update("books", 3, { author: "CCCC", year: 2006, title: "CAAAA" });
console.dir(get(), { depth: null });
backupStore();
deleteData("books", 3);
console.dir(get(), { depth: null });
restore();
console.dir(get(), { depth: null });
