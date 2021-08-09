const meal = require("./constants/meal");
const Meal = require("./model/mealSchema");

const defaultMeal = async () => {
  try {
    await Meal.deleteMany({});
    let meals = await Meal.insertMany(meal);
    console.log("data imported", meals);
  } catch (err) {
    console.log("error", err);
  }
};

module.exports = defaultMeal;
