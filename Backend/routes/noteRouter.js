import express from "express";
import {
  Addnote,
  deleteNote,
  fetchNote,
  searchNote,
  updateNote,
} from "../controlers/noteControler.js";
// import { requiedSingin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/addNote", Addnote);

router.get("/getNotes", fetchNote);

router.put("/updateNote/:id", updateNote);

router.delete("/deleteNote/:id", deleteNote);

router.get("/searchNote", searchNote);

export default router;
