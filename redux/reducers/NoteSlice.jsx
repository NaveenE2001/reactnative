import { createSlice } from "@reduxjs/toolkit";

// Utility function to reset the state
const resetState = (state) => {
  state.loading = false;
  state.data = null;
  state.error = null;
  state.success = false;
};

const NoteSlice = createSlice({
  name: "note",
  initialState: {
    addNote: {
      loading: false,
      data: null,
      error: null,
      success: false,
    },
    deleteNote: {
      loading: false,
      data: null,
      error: null,
      success: false,
    },
    updateNote: {
      loading: false,
      data: null,
      error: null,
      success: false,
    },
    getNote: {
      loading: false,
      data: null,
      error: null,
      success: false,
    },
    notes: [], // Array of notes in the state
    serchNote:{
      loading:false,
      data:null,
      error:null
    }
  },

  reducers: {
    // Add Note
    is_note_loading: (state) => {
      state.addNote.loading = true;
      resetState(state.addNote);
    },
    is_note_success: (state, action) => {
      state.addNote.loading = false;
      state.addNote.data = action.payload;
      state.addNote.error = null;
      state.addNote.success = true;
      state.notes.push(action.payload); // Add the new note to the list
    },
    is_note_error: (state, action) => {
      state.addNote.loading = false;
      state.addNote.data = null;
      state.addNote.error = action.payload;
      state.addNote.success = false;
    },
    // Delete Note
    delete_note_loading: (state) => {
      state.deleteNote.loading = true;
      resetState(state.deleteNote);
    },
    delete_note_success: (state, action) => {
      state.deleteNote.loading = false;
      state.notes = state.notes.filter(note => note._id !== action.payload._id); // Remove the deleted note from the list
      state.deleteNote.error = null;
      state.deleteNote.success = true;
    },
    delete_note_error: (state, action) => {
      state.deleteNote.loading = false;
      state.deleteNote.data = null;
      state.deleteNote.error = action.payload;
      state.deleteNote.success = false;
    },
    // Update Note
    update_note_loading: (state) => {
      state.updateNote.loading = true;
      resetState(state.updateNote);
    },
    update_note_success: (state, action) => {
      state.updateNote.loading = false;
      state.notes = state.notes.map(note => note._id === action.payload._id ? action.payload : note); // Update the note in the list
      state.updateNote.error = null;
      state.updateNote.success = true;
    },
    update_note_error: (state, action) => {
      state.updateNote.loading = false;
      state.updateNote.data = null;
      state.updateNote.error = action.payload;
      state.updateNote.success = false;
    },
    // Get Notes
    get_note_loading: (state) => {
      state.getNote.loading = true;
      resetState(state.getNote);
    },
    get_note_success: (state, action) => {
      state.getNote.loading = false;
      state.notes = action.payload; // Set the notes in the state
      state.getNote.error = null;
      state.getNote.success = true;
    },
    get_note_error: (state, action) => {
      state.getNote.loading = false;
      state.getNote.data = null;
      state.getNote.error = action.payload;
      state.getNote.success = false;
    },
    search_note_loading:(state,action)=>{
      state.serchNote.loading=true;
      state.serchNote.data=null;
      state.serchNote.error=null;
    },
    serch_note_success:(state,action)=>{
      state.serchNote.loading=true;
      state.serchNote.data=action.payload;
      state.serchNote.error=null;
    },
    serch_note_error:(state,action)=>{
      state.serchNote.loading=true;
      state.serchNote.data=null;
      state.serchNote.error=action.payload;
    }
  },
});

export const {
  is_note_loading,
  is_note_success,
  is_note_error,
  delete_note_loading,
  delete_note_success,
  delete_note_error,
  update_note_loading,
  update_note_success,
  update_note_error,
  get_note_loading,
  get_note_success,
  get_note_error,
} = NoteSlice.actions;

export default NoteSlice.reducer;
