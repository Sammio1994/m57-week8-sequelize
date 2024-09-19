const {Router} = require("express");
const authorRouter = Router();

const {getAuthorByAuthor, addAuthor, getAllAuthors} = require("./controllers");

authorRouter.get("/authors/getauthorbyauthor/:author", getAuthorByAuthor);

authorRouter.post("/authors/addauthor", addAuthor);

authorRouter.get("/authors/getallauthors/", getAllAuthors)

module.exports = authorRouter;