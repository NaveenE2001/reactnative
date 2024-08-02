import JWT from "jsonwebtoken";
import { comparePassword, hashPassword } from "../healpers/authHealper.js";
import Auth from "../models/Auth.js";
const JWT_SEC = `Naveen@`;

export const Signin = async (req, res) => {
  try {
    const { name, userName, password } = req.body;

    // Check if the user already exists
    const existuser = await Auth.findOne({ userName });
    if (existuser) {
      return res.status(400).json({
        success: false,
        message: "Username already exists, please login",
      });
    }

    // Hash the password before saving it to the database
    const hash = await hashPassword(password);

    // Save the new user to the database
    const user = new Auth({
      name,
      userName,
      password: hash,
    });

    await user.save();

    return res.status(201).json({
      success: true,
      message: "The data was saved to the database successfully",
      user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

export const Login = async (req, res) => {
  try {
    const { userName, password } = req.body;
    if (userName.length === 0 || password.length === 0) {
      return res.status(400).json({
        success: false,
        message: "User Name or password is must be field",
      });
    }
    const existuser = await Auth.findOne({ userName });
    if (!existuser) {
      return res.status(400).json({
        success: false,
        message: "User does not exist, please sign up",
      });
    }

    const crtpassword = await comparePassword(password, existuser.password);
    if (crtpassword) {
      const token = JWT.sign({ userId: existuser._id }, JWT_SEC, {
        expiresIn: "1h",
      });

      return res.status(200).json({
        success: true,
        message: "Successfully logged in",
        token,
        admin: existuser.admin,
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "Incorrect username or password",
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};
