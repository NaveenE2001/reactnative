import mongoose from "mongoose";

const NoteSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  note: { type: String, require: true },
});

const Note = mongoose.model("note", NoteSchema);

export default Note;
