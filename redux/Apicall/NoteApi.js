import * as NoteSlice from "../reducers/NoteSlice.jsx";

// Utility function to handle the API response
const handleApiResponse = async (
  response,
  dispatch,
  successAction,
  errorAction
) => {
  if (!response.ok) {
    const errorData = await response.json();
    dispatch(errorAction(errorData.message || "An error occurred"));
    return Promise.reject(errorData.message || "An error occurred");
  }

  const data = await response.json();
  dispatch(successAction(data));
  return Promise.resolve(data);
};

// Add Note
export const NoteAdd = (form, token) => {
  return async (dispatch) => {
    try {
      const apiUrl = "http://192.168.43.69:5000/api/v2/addNote";
      dispatch(NoteSlice.is_note_loading());
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(form),
      });

      return handleApiResponse(
        response,
        dispatch,
        NoteSlice.is_note_success,
        NoteSlice.is_note_error
      );
    } catch (error) {
      dispatch(NoteSlice.is_note_error(error.message || "An error occurred"));
      return Promise.reject(error.message || "An error occurred");
    }
  };
};

// Fetch Notes
export const NoteFetch = (token) => {
  return async (dispatch) => {
    try {
      const apiUrl = "http://192.168.43.69:5000/api/v2/getNotes";
      dispatch(NoteSlice.get_note_loading());
      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      return handleApiResponse(
        response,
        dispatch,
        NoteSlice.get_note_success,
        NoteSlice.get_note_error
      );
    } catch (error) {
      dispatch(NoteSlice.get_note_error(error.message || "An error occurred"));
      return Promise.reject(error.message || "An error occurred");
    }
  };
};

// Update Note
export const NoteUpdate = (form, token) => {
  return async (dispatch) => {
    try {
      const apiUrl = "http://192.168.43.69:5000/api/v2/updateNote";
      dispatch(NoteSlice.update_note_loading());
      const response = await fetch(apiUrl, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(form),
      });

      return handleApiResponse(
        response,
        dispatch,
        NoteSlice.update_note_success,
        NoteSlice.update_note_error
      );
    } catch (error) {
      dispatch(
        NoteSlice.update_note_error(error.message || "An error occurred")
      );
      return Promise.reject(error.message || "An error occurred");
    }
  };
};

// Delete Note
export const NoteDelete = (noteId, token) => {
  return async (dispatch) => {
    try {
      const apiUrl = `http://192.168.43.69:5000/api/v2/deleteNote/${noteId}`;
      dispatch(NoteSlice.delete_note_loading());
      const response = await fetch(apiUrl, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      return handleApiResponse(
        response,
        dispatch,
        NoteSlice.delete_note_success,
        NoteSlice.delete_note_error
      );
    } catch (error) {
      dispatch(
        NoteSlice.delete_note_error(error.message || "An error occurred")
      );
      return Promise.reject(error.message || "An error occurred");
    }
  };
};

// Search Notes
export const NoteSearch = (query, token) => {
  return async (dispatch) => {
    try {
      const apiUrl = `http://192.168.43.69:5000/api/v2/searchNotes?query=${encodeURIComponent(
        query
      )}`;
      dispatch(NoteSlice.get_note_loading());
      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      return handleApiResponse(
        response,
        dispatch,
        NoteSlice.get_note_success,
        NoteSlice.get_note_error
      );
    } catch (error) {
      dispatch(NoteSlice.get_note_error(error.message || "An error occurred"));
      return Promise.reject(error.message || "An error occurred");
    }
  };
};

// //fetch troung the redux also posible
// import { useSelector } from "react-redux"; // To access Redux state

// export const NoteAddredux = (form) => {
//   return async (dispatch, getState) => {
//     try {
//       const apiurl = "http://192.168.43.69:5000/api/v2/addNote";
//       const state = getState(); // Get the current Redux state
//       const token = state.auth.token; // Access the token from the auth slice

//       if (!token) {
//         throw new Error("Authentication token is missing");
//       }

//       dispatch(NoteSlice.is_note_loading());
//       const response = await fetch(apiurl, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`, // Include the token in the header
//         },
//         body: JSON.stringify(form),
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         alert(errorData.message);
//         dispatch(
//           NoteSlice.is_note_error(errorData.message || "An error occurred")
//         );
//         return Promise.reject(errorData.message || "An error occurred");
//       }

//       const data = await response.json();
//       dispatch(NoteSlice.is_note_success(data));
//       return Promise.resolve(data);
//     } catch (error) {
//       dispatch(NoteSlice.is_note_error(error.message || "An error occurred"));
//       return Promise.reject(error.message || "An error occurred");
//     }
//   };
// };
