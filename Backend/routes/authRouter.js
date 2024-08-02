import express from "express";
import { Login, Signin } from "../controlers/authControler.js";

const router = express.Router();

router.post("/signin", Signin);

router.post("/login", Login);

export default router;
