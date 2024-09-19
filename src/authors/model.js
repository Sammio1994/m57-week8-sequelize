const {DataTypes} = require("sequelize");

const sequelize = require("../DB/connection");

const Author = sequelize.define(
    "author", 
    {
     author: {
              type: DataTypes.STRING,
            //   unique: true,
            // allowNull: false,
              defaultValue: "Written by awesomeness",
              },
    }, 
{ timestamp: false }
);


module.exports = Author;