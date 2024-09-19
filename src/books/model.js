const {DataTypes} = require("sequelize");

const sequelize = require("../DB/connection");

const Book = sequelize.define(
    "book", 
    {
        title: {
            type: DataTypes.STRING, 
            unique: true,
            allowNull: false,
        },
        author: {
            type: DataTypes.STRING,
            defaultValue: "Written by awesomeness",
        },
        genre: {
            type: DataTypes.STRING,
            defaultValue: "some genre",
        },
    }, 
{ timestamp: false }
);


module.exports = Book;