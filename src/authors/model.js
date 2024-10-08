const {DataTypes} = require("sequelize");

const sequelize = require("../DB/connection");

const Author = sequelize.define(
    "author", 
    {
             name: {
              type: DataTypes.STRING,
            //   unique: true,
            allowNull: false,
              },
    }, 
{ timestamps: false }
);


module.exports = Author;