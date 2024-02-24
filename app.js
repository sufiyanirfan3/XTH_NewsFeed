require("dotenv").config();
require("./src/models");
const { sequelize } = require("./src/models");
const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());
app.use("/post", require("./src/routes/post/post"));

app.get("*", (req, res) => {
   res.send("Welcome to XTH Assessment");
});

sequelize
   .sync()
   .then(() => {
      app.listen(process.env.PORT, () => {
         console.log(`listening on port ${process.env.PORT}...`);
      });
   })
   .catch((e) => {
      console.log({ error: e.message });
   });
