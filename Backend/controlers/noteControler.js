import Note from "../models/Note.js";

// Function to add a new note
export const Addnote = async (req, res) => {
  try {
    const { title, note } = req.body;
    const existtitle = await Note.find({ title });
    if (existtitle) {
      return res.status(300).json({
        success: false,
        message:
          "Tittle is already exist not posible to use same title modify the title",
      });
    }

    if (!title || !note) {
      return res.status(400).json({
        success: false,
        message: "Title or note cannot be empty",
      });
    }

    const saveNote = new Note({
      title,
      note,
    });

    const savedNote = await saveNote.save();

    return res.status(201).json({
      success: true,
      message: "Note added successfully",
      note: savedNote,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error",
      error,
    });
  }
};

// Function to fetch all notes
export const fetchNote = async (req, res) => {
  try {
    const data = await Note.find({});
    if (!data || data.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No data found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "All data fetched successfully",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error",
      error,
    });
  }
};

// Function to delete a note
export const deleteNote = async (req, res) => {
  try {
    const { id } = req.params;
    const idverify = await Note.findById(id);
    if (!idverify) {
      return res.status(404).json({
        success: false,
        message: "Id not found in the note",
      });
    }

    await Note.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "Note deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error",
      error,
    });
  }
};

// Function to update a note
export const updateNote = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, note } = req.body;

    const idverify = await Note.findById(id);
    if (!idverify) {
      return res.status(404).json({
        success: false,
        message: "Id not found in the note",
      });
    }

    const updatedNote = await Note.findByIdAndUpdate(
      id,
      { title, note },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Note updated successfully",
      note: updatedNote,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error",
      error,
    });
  }
};

// Function to search for notes
export const searchNote = async (req, res) => {
  try {
    const { query } = req.query;
    const notes = await Note.find({
      $or: [
        { title: { $regex: query, $options: "i" } },
        { note: { $regex: query, $options: "i" } },
      ],
    });

    if (!notes || notes.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No matching notes found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Notes fetched successfully",
      notes,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error",
      error,
    });
  }
};
