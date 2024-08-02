const JWT_SEC = "Naveen@";
import JWT from "jsonwebtoken";
import Auth from "../models/Auth.js";

export const requiedSingin = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res
        .status(401)
        .json({ message: "Authorization header is missing" });
    }
    console.log(authHeader);
    const token = authHeader.split(" ")[1]; // Extract the token part from "Bearer <token>"

    if (!token) {
      return res.status(401).json({ message: "Token is missing" });
    }

    const decoded = JWT.verify(token, JWT_SEC);
    req.user = decoded; // Attach the decoded user to the request object

    next(); // Call next middleware or route handler
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

export const isAdmin = async (req, res, next) => {
  try {
    const authHeader = await req.headers.authorization;

    if (!authHeader) {
      return res
        .status(401)
        .json({ message: "Authorization header is missing" });
    }

    const token = authHeader.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "Token is missing" });
    }
    const decode = JWT.verify(token, JWT_SEC);
    req.user = decode;
    console.log(decode);
    const user = await Auth.findById(decode.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (user.admin !== 1) {
      return res.status(403).json({ message: "Access denied, admin only" });
    }

    next(); // Call next middleware or route handler
  } catch (error) {
    return res.status(401).json({ message: "Invalid token", error });
  }
};
