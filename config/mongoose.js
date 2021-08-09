const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://nk6217:nk@217cluster0.28eqa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "error connecting mongodb"));

db.once("open", function () {
  console.log("connected to database");
});

module.exports = db;
