const PORT = require("./port")
const express = require("express");
const app = express();
app.use(express.json());


const add_student = require("./controllers/add_student");
const get_all_students = require("./controllers/get_all_students");
const add_book = require("./controllers/add_book");
const get_all_books = require("./controllers/get_all_books");
const update_student = require("./controllers/update_student");
const update_book = require("./controllers/update_book");
const delete_student = require("./controllers/delete_student");
const delete_book = require("./controllers/delete_book");
const get_student = require("./controllers/get_student");
const get_book = require("./controllers/get_book");


// CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, PATCH, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get("/", (req, res) => res.json({ message: "View API_REFERECE" }));

app.post("/students", add_student);
app.get("/students", get_all_students);
app.get("/students/:id", get_student);
app.patch("/students/:id", update_student);
app.delete("/students/:id", delete_student);

app.post("/books", add_book);
app.get("/books", get_all_books);
app.get("/books/:id", get_book);
app.patch("/books/:id", update_book);
app.delete("/books/:id", delete_book);


app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
