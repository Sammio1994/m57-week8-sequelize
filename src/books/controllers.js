const Book = require("./model");

const addBook = async (req, res) => {
    try {

        const book = await Book.create({
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre,
        })

        res.status(201).json({message: "success", book: book});
    } catch (error) {

        res.status(500).json({message: error.message, error: error})
    }
};

const getAllBooks = async (req, res) => {
    try {
        const books = await Book.findAll();

        res.status(200).json({message: "success", books: books });
    } catch (error) {
        res.status(500).json({message: error.message, error: error})
    }
}



const deleteOne = async (req, res) => {
    try {
        const deletedBook = await Book.destroy({
            where: {
                title: req.body.title,
            },
        });
        res.status(202).json({message: "success", deletedBook: deletedBook });
    } catch (error) {
        res.status(500).json({message: error.message, error: error})
    }
}

const updateAuthor = async (req, res) => {
    try {
        const updateBook = await Book.update({
            author: req.body.author },
            {
            where: {title: req.body.title},
        });
        res.status(202).json({message: "success", updateBook: updateBook });
    } catch (error) {
        res.status(500).json({message: error.message, error: error})
    }
}

// const params = async (req, res) => {
//     try {
//         console.log("req.params: ", req.params.author);

//         res.status(202).json({message: "success", params: req.params });
//     } catch (error) {
//         res.status(500).json({message: error.message, error: error})
//     }
//     };


    const getBookByAuthor = async (req, res) => {
        try {
            //findAll
            const book = await Book.findOne({where: {author: req.params.author}});
            res.status(200).json({message: "success", book: book});
        } catch (error) {
            res.status(500).json({message: error.message, error: error});
        }
    }

module.exports = {
    addBook: addBook,
    getAllBooks: getAllBooks,
    deleteOne: deleteOne,
    updateAuthor: updateAuthor,
    // params: params,
    getBookByAuthor: getBookByAuthor,
};