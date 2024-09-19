const {Router} = require("express");
const bookRouter = Router();

const {addBook, getAllBooks, deleteOne, updateAuthor, params, getBookByAuthor, } = require("./controllers");

bookRouter.post("/books/addbook", addBook);

bookRouter.get("/books/getallbooks", getAllBooks);

bookRouter.delete("/books/deleteOne", deleteOne);

bookRouter.put("/books/updateauthor", updateAuthor);

bookRouter.get("/books/getbookbyauthor/:author", getBookByAuthor);

// bookRouter.get("/books/params/:author", params);

module.exports = bookRouter;