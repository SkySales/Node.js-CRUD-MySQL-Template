/*MYSQL CRUD SYSTEM

* CALL MYSQL MODULE *
* CREATE CONNECTION *
* DEBUG CONNECTION *
* CREATE CRUD FUNCTIONS Insert,Read,Update,Delete *

*/

const mysql = require("mysql")

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "reactdb",
})

con.connect(function(err) {
    if (err) throw err;
    console.log("Database Connected");
    sqlRead();
})

const sqlInsert = () => {
    const Insertsql = "INSERT INTO data (firstname, lastname) VALUES ('Marco', 'Amaba')"
    con.query(Insertsql, function(err, result) {
        if (err) throw err;
        console.log("1 Record Insert Success");
    })
};

const sqlRead = () => {
    const Readsql = "SELECT * FROM data"
    con.query(Readsql, function(err, result) {
        if (err) throw err;
        console.log(result);
    })
};

const sqlUpdate = () => {
    const Updatesql = "UPDATE data SET firstname='Marc Ross' WHERE firstname='MarcO'"
    con.query(Updatesql, function(err, result) {
        if (err) throw err;
        console.log("1 Record Update Success");
    })
};

const sqlDelete = () => {
    const Deletesql = "DELETE FROM data WHERE data_id=114"
    con.query(Deletesql, function(err, result) {
        if (err) throw err;
        console.log("1 Record Delete Success");
    })
};