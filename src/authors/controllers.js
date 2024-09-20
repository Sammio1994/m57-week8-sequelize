const Book = require("../books/model");
const Author = require("./model");

const getAuthorByAuthor = async (req, res) => {
    try {
        //findAll findOne
        const author = await Author.findOne({where: {name: req.params.author}, include:Book });
        res.status(200).json({message: "success", author: author});
    } catch (error) {
        res.status(500).json({message: error.message, error: error});
    };
};

const addAuthor = async (req, res) => {
    try {

        const author = await Author.create({
            name: req.body.name,
        })
        res.status(201).json({message: "success", author: author});
    } catch (error) {

        res.status(500).json({message: error.message, error: error})
    }
};

const getAllAuthors = async (req, res) => {
    try {
        const authors = await Author.findAll();

        res.status(200).json({message: "success", authors: authors });
    } catch (error) {
        res.status(500).json({message: error.message, error: error})
    }
}

module.exports = {
    getAuthorByAuthor: getAuthorByAuthor,
    addAuthor: addAuthor,
    getAllAuthors: getAllAuthors,
};