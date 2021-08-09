const mongoose = require("mongoose");

const mealSchema = new mongoose.Schema(
  {
    name: String,
    description: String,
    url: String,
    price: Number,
    
  },
  {
    timestamps: true,
  }
);

const Meal = mongoose.model("Meal", mealSchema);
module.exports = Meal;
