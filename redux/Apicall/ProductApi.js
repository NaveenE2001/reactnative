import {
  is_product_loading,
  is_product_success,
  is_product_error,
} from "../reducers/ProductSlice";

export const ProductList = (token) => {
  return async (dispatch) => {
    try {
      const apiUrl = `http://192.168.43.69:5000/api/users/all`;
      dispatch(is_product_loading());

      const res = await fetch(apiUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          token: `${token}`,
        },
      });
      if (!res.ok) {
        const error = await res.json();
        console.log(error);
        dispatch(is_product_success(error));
      }
      const data= await res.json();
      dispatch(is_product_success(data))
    } catch (error) {
      console.log(error);
      
    }
  };
};
