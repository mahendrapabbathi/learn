
import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";
import { sendEmail } from "../emailSending/sendEmail.js";

// Register User
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if user already exists
    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.status(400).json({ success: false, message: "User already exists" });
    }

    // Validate email
    if (!validator.isEmail(email)) {
      return res.status(400).json({ success: false, message: "Invalid email format" });
    }

    // Validate password strength
    if (!validator.isStrongPassword(password, { minLength: 8 })) {
      return res.status(400).json({ success: false, message: "Password must be at least 8 characters long" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const newUser = new userModel({ name, email, password: hashedPassword });
    const user = await newUser.save();

    // Generate token
    const token = createToken(user._id);
    res.status(201).json({ success: true, token });
  } catch (error) {
    console.error("Register error:", error.message);
    res.status(500).json({ success: false, message: "Server error during registration" });
  }
};

// Login User
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ success: false, message: "Invalid credentials" });
    }

    const token = createToken(user._id);
    res.status(200).json({ success: true, token });
  } catch (error) {
    console.error("Login error:", error.message);
    res.status(500).json({ success: false, message: "Server error during login" });
  }
};

// Create JWT Token
const createToken = (id) => {
  try {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1h" });
  } catch (error) {
    console.error("JWT error:", error.message);
    throw new Error("Failed to generate token");
  }
};

// Send Email
const sendingMail = async (req, res) => {
  const { name, email, message } = req.body;

  if (![name, email, message].every(Boolean)) {
    return res.status(400).json({ success: false, message: "All fields are required." });
  }

  try {
    await sendEmail({
      email: process.env.RECEIVER_EMAIL,
      subject: "Contact Form Submission",
      message: `${name} says: ${message}`,
      userEmail: email,
    });
    res.status(200).json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error("Email sending error:", error.message);
    res.status(500).json({ success: false, message: "Failed to send message. Please try again later." });
  }
};

export { loginUser, registerUser, sendingMail };
