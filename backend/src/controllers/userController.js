import bcrypt from "bcrypt";
import { User } from "../models/User.js";
//import jwt from "jsonwebtoken";


export const register = async (req, res) => {
  try {
    const { password, email, ...userData } = req.body;
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();
    const existingUser = await User.findOne({ email: trimmedEmail });

    if (existingUser) {
      console.error("Email is already taken");
      return res.status(400).json({ error: "Email is already taken" });
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!emailRegex.test(trimmedEmail)) {
      console.error("Invalid email format");
      return res.status(400).json({ error: "Invalid email format" });
    }

    if (trimmedPassword.length < 10) {
      console.error("Password should be at least 10 characters");
      return res
        .status(400)
        .json({ error: "Password should be at least 10 characters" });
    }

    const hashedPassword = await bcrypt.hash(trimmedPassword, 10);
    const newUser = new User({
      ...userData,
      email: trimmedEmail,
      password: hashedPassword,
      notificationToken: req.body.notificationToken,
    });

    await newUser.save();
    console.log("User created successfully:", newUser);
    res
      .status(201)
      .json({ message: "User created successfully!", user: newUser });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Something went wrong!" });
  }
};

export const login = async (req, res) => {
  try {
    const { password, email } = req.body;

    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();

    const user = await User.findOne({ email: trimmedEmail });

    if (!user) {
      console.error("User not found");
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const passwordMatch = await bcrypt.compare(trimmedPassword, user.password);

    if (!passwordMatch) {
      console.error("Incorrect password");
      return res.status(401).json({ error: "Invalid credentials" });
    }

    console.log("Login successful:", user);

    res.status(200).json({ message: "Login successful", user });
  } catch (error) {
    console.error("Error in login:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
};
