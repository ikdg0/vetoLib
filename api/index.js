const express = require("express");
const app = express();
const db = require("./databases/database");
const cors = require("cors");
const bcrypt = require("bcrypt");
const animalRoute = require('./routes/animalRoute');


app.use(express.json());
app.use(cors());
app.use('/animal', animalRoute);



app.listen(8000, function () {
  console.log("serveur sur le port 8000");
});