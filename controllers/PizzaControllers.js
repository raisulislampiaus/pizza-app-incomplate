const express = require("express");
const router = express.Router();
const Pizza = require("../models/pizzaModel");

router.get("/allPizza", async (req, res) => {
  try {
    const allPizza = await Pizza.find({});
    res.send(allPizza);
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

router.get("/pizza/:id", async (req, res) => {
  try {
    const pizza = await Pizza.findById(req.params.id);
    res.send(pizza);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

module.exports = router;
