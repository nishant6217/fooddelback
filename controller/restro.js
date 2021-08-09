const Restro = require("../model/restroSchema");
const Meal = require("../model/mealSchema");

module.exports.getall = async function (req, res) {
  try {
    const restro = await Restro.find({});
    res.json(restro);
  } catch (err) {
    console.log("error", err);
  }
};

module.exports.getRestById = async function (req, res) {
  try {
    let restro = await Restro.findOne({ id: req.params.id }).populate("meal");
    console.log("11111111dddddddddddddddddddddddddddddddddddddd111", restro);
    res.json(restro);
  } catch (err) {
    console.log("error ", err);
  }
};

module.exports.getMealById = async function (req, res) {
  try {
    let meal = await Meal.findOne({ name: req.params.id });
    console.log("qwertyuikjbjmbkjbop", meal);
    res.json(meal);
  } catch (err) {
    console.log("error", err);
  }
};
