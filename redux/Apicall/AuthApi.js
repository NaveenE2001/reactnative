import {
  is_login_loading,
  is_login_success,
  is_login_error,
  is_signin_error,
  is_signin_success,
  is_signin_loading,
} from "../reducers/AuthSlice";

export const loginUser = (form) => {
  return async (dispatch) => {
    const apiUrl = "http://192.168.43.69:5000/api/v1/login";
    console.log(form);
    if (form.userName === "" || form.password === "") {
      alert("UserName and Password must be filled");
    }
    dispatch(is_login_loading());

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const errorData = await response.json();
        alert(errorData.message);
        dispatch(is_login_error(errorData.message || "An error occurred"));
        return Promise.reject(errorData.message || "An error occurred");
      }

      if (response.ok) {
        const data = await response.json();
        dispatch(is_login_success(data));
        sessionStorage.setItem("token-note", data.token);
        return Promise.resolve(data);
      }
    } catch (error) {
      alert(error);
      dispatch(is_login_error(error.message));
      return Promise.reject(error.message);
    }
  };
};

export const signinUser = (form) => {
  return async (dispatch) => {
    const api = "http://192.168.43.69:5000/api/v1/signin";
    dispatch(is_signin_loading());

    try {
      const response = await fetch(api, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const errorData = await response.json();
        dispatch(is_signin_error(errorData.message));
      }

      const data = await response.json();
      dispatch(is_signin_success(data));
      // console.log(data);
    } catch (error) {
      dispatch(is_signin_error(error.message));
    }
  };
};
