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
        authorname: {
            type: DataTypes.STRING,
            allowNull: false,
            // defaultValue: "Written by awesomeness",
        },
        genrename: {
            type: DataTypes.STRING,
            allowNull: false,
            // defaultValue: "some genre",
        },
    }, 
{ timestamp: false }
);


module.exports = Book;