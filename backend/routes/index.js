const express = require("express");

const Todo = require("../models/Todo");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const todos = await Todo.find();
    return res.status(200).json(todos);
  } catch (err) {
    return res.status(500).json("Error in fetching todo's", err);
  }
});

router.use("/user", require("./user"));
router.use("/todos", require("./todos"));

module.exports = router;
