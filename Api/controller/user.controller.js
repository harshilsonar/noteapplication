const User = require("../models/user.model")
const bcrypt = require("bcrypt");
require("dotenv").config();
const jwt = require("jsonwebtoken");


const userController = {
  test: (req, res) => {
    res.send("test route working");
  },

  register: async (req, res) => {
    if (!req.body) {
      return res.status(400).json({ message: "Request body is required" });
    }

    const { email, name, password } = req.body;

    if (!email || !name || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    try {
      const isexistUser = await User.findOne({ email });

      if (isexistUser) {
        return res.status(401).json({ message: "User already registerd" });
      }

      try {
        const hashPassword = await bcrypt.hash(password, 5);
        await User.create({ ...req.body, password: hashPassword });
        res.status(201).json({ message: "User registered successfully" });
      } catch (error) {
        console.error(error.message, "error while registration");
        return res.status(400).json({ message: "Error hashing password" });
      }
    } catch (error) {
      return res.status(401).json({ message: "Internal server error" });
    }
  },

  signin: async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  try {
    const isExistUser = await User.findOne({ email });

    if (!isExistUser) {
      return res.status(404).json({ message: "User does not exist" });
    }

    const isPasswordMatch = await bcrypt.compare(password, isExistUser.password);
    if (!isPasswordMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }

    const { password: _, ...userWithoutPassword } = isExistUser._doc;

    try {
      const token = jwt.sign(userWithoutPassword, process.env.JWT_SECRET_KEY);

      res
        .cookie("access_token", token, {
          httpOnly: true, // optional: for security
        })
        .status(200)
        .json({
          message: "User signed in successfully",
          user: userWithoutPassword,
          token,
        });
    } catch (tokenError) {
      return res.status(500).json({
        message: "Error generating token",
        error: tokenError.message,
      });
    }
  } catch (err) {
    console.error("Error during signin:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
},

};

module.exports = userController