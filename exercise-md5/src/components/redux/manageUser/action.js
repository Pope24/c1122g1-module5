import axios from "axios";

export const FETCH_USER = "FETCH_USER";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const DELETE_USER = "DELETE_USER";
export const DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS";
export const deleteUser = (id) => {
  return async (dispatch) => {
    const response = await axios.delete(
      "https://jsonplaceholder.typicode.com/users/" + id
    );
    console.log(response);
    dispatch({
      type: FETCH_USER_SUCCESS,
      payload: response.data,
    });
  };
};
