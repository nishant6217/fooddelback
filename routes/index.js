const express = require("express");
const router = express.Router();
const restro = require("../controller/restro");

router.get("/getrest", restro.getall);
router.get("/getrest/:id", restro.getRestById);
router.get("/getmeals/:id", restro.getMealById);

module.exports = router;
