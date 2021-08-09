const mongoose = require("mongoose");

const restroSchema = new mongoose.Schema(
  {
    id: String,
    url: String,
    detailUrl: String,
    title: Object,
    price: Object,
    description: String,
    discount: String,
    tagline: String,
    meal: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Meal",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Restro = mongoose.model("Restro", restroSchema);
module.exports = Restro;
