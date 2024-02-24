const { Sequelize, DataTypes } = require("sequelize");
const express = require("express");
const app = express();

// Create new instance
const sequelize = new Sequelize(
  process.env.db,
  process.env.username,
  process.env.password,
  { host: process.env.host, dialect: process.env.dialect }
);

// Checking connection
sequelize
  .authenticate()
  .then(() => {
    console.log("DB Connected Successfully");
  })
  .catch((e) => {
    console.log("Error: ", +e);
  });

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./user")(sequelize, DataTypes);
db.post = require("./post")(sequelize, DataTypes);
db.comments = require("./comment")(sequelize, DataTypes);
db.followers = require("./followers")(sequelize, DataTypes);
db.likes = require("./like")(sequelize, DataTypes);
db.shares = require("./share")(sequelize, DataTypes);

module.exports = db;
