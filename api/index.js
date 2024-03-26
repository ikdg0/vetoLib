const express = require("express");
const app = express();
const db = require("./databases/database.js");
const cors = require("cors");
const bcrypt = require("bcrypt");



app.use(express.json());
app.use(cors());


app.listen(8000, function () {
  console.log("serveur sur le port 8000");
});