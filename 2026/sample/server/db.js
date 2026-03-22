class inMemDb {
    constructor() {
        this.store = new Map();
        this.backup = new Map();
        this.ttl = 5000;
    }
    setTtl(time) {
        this.ttl = time;
    }

    tableExists(tableName) {
        if (this.store.has(tableName)) {
            return true;
        }
    }

    createTable(tableName) {
        if (!this.tableExists(tableName)) {
            this.store.set(tableName, new Map());
        }
    }

    insert(tableName, id, data, ttl = null) {
        if (!this.tableExists) {
            console.log("table does not exists");
        }

        var expiry = ttl ? ttl + Date.now() : null;
        this.store.get(tableName).set(id, { expiry, data });
    }

    update(tableName, id, updatedData) {
        if (!this.tableExists) {
            console.log("table does not exists");
        }

        var table = this.store.get(tableName);
        var data = table.get(id);
        if (this.isExpired(data)) {
            table.delete(id);
        } else {
            var newdata = { expiry: data.expiry, data: updatedData };

            table.set(id, newdata);
        }
    }

    delete(tableName, id) {
        if (!this.tableExists) {
            console.log("table does not exists");
        }

        this.store.get(tableName).delete(id);
    }

    getAll() {
        var result = new Map();
        for (var [tableName, tableData] of this.store) {
            var table = new Map();
            for (var [key, value] of tableData) {
                if (this.isExpired(value)) {
                    tableData.delete(key);
                } else table.set(key, value);
            }
            result.set(tableName, table);
        }
        return result;
    }

    getTableData(tableName) {
        var result = new Map();
        var table = this.store.get(tableName);
        for (var [key, value] of table) {
            if (this.isExpired(value)) {
                table.delete(key);
            } else {
                result.set(key, value);
            }
        }
        return result;
    }

    snapshot() {
        for (var [key, value] of this.store)
            this.backup.set(key, new Map(value));
    }

    restore() {
        this.store = new Map(this.backup);
    }

    isExpired(data) {
        return data.expiry !== null && data.expiry < Date.now();
    }
}

var db = new inMemDb();
db.createTable("books");
db.insert("books", 1, "aaa", 3000);
db.insert("books", 2, "bbb", 3000);
db.insert("books", 3, "ccc", 3000);
db.insert("books", 4, "ddd", 3000);
console.log(db.getAll());
db.update("books", 4, "dddddd");
console.log(db.getAll());
db.snapshot();
db.delete("books", 2);
console.log(db.getAll());
db.restore();
console.log(db.getAll());

setTimeout(() => {
    console.log(db.getTableData("books"));
}, 4000);
