const express = require("express");
const app = express();
const db = require("./databases/database");
const cors = require("cors");
const bcrypt = require("bcrypt");
const animalRoute = require('./routes/animalRoute');
const user = require("./routes/userRoute.js")
//const cabinetRoute = require('./routes/cabinetRoute');


app.use(express.json());
app.use(cors());
app.use('/animal', animalRoute);

app.use('/getall', user);



app.listen(8000, function () {
  console.log("serveur sur le port 8000");
});