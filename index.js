const express = require("express");
const app = express();
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
dotenv.config();

const PORT = process.env.PORT;

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const db = require("./config/mongoose");
const restro = require("./model/restroSchema");

const meal = require("./model/mealSchema");
// const defaultData = require("./defaultData");
const defaultMeal = require("./defaultMeal");

app.use("/", require("./routes"));

app.listen(PORT, function (err) {
  if (err) {
    console.log(`error in running server ${PORT}`);
  }
  console.log("server running on port ", PORT);
});
// defaultData();
defaultMeal();
