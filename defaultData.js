const restro = require("./constants/restro");
const Restro = require("./model/restroSchema");

const defaultData = async () => {
  try {
    await Restro.deleteMany({});
    let restros = await Restro.insertMany(restro);
    console.log("data imported", restros);
  } catch (err) {
    console.log("error", err);
  }
};

module.exports = defaultData;
