const express = require("express");

const app = express();
const PizzaControllers = require("./controllers/PizzaControllers");

require("dotenv").config();

const mongoose = require("./db");

app.use(express.json());

mongoose();

app.get("/", (req, res) => {
  res.send("Welcome to the Google");
});

app.use("/api/", PizzaControllers);

const port = process.env.PORT || 7000;

app.listen(port, () => console.log(`application port: ${port}`));
