const addBook = async (req, res) => {
    try {
        res.status(201).json({message: "success"});
    } catch (error) {
        res.status(500).json({message: error.message, error: error})
    }
};

module.exports = {
    addBook: addBook,
};

