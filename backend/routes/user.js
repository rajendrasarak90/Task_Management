const express = require("express");
const bcrypt = require("bcryptjs");

const User = require("../models/User");
const router = express.Router();

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const hashedPass = bcrypt.hashSync(password, 10);
    const userCreate = await User.create({ name, email, password: hashedPass });
    if (userCreate) {
      return res.status(200).json({ user: userCreate });
    }
  } catch (err) {
    return res.status(500).json("error in creating user", err);
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    // const { name, email, password } = req.body;
    const userToLogin = await User.findOne({ email });
    if (!userToLogin) {
      return res.status(404).json("User Not Found");
    }
    const comparePass = bcrypt.compareSync(password, userToLogin.password);
    if (!comparePass) {
      return res.status(401).json("Password Invalid");
    }
    return res.status(200).json({ user: userToLogin });
  } catch (err) {
    return res.status(500).json("error in creating user", err);
  }
});

module.exports = router;
