import axios from "axios";

export const LOGIN = "LOGIN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const FETCH_USER = "FETCH_USER";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const fakeLogin = (payload) => {
  return async (dispatch) => {
    const { username, password } = payload;
    if (username === "chinhhg" && password === "chinhhg") {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: payload,
      });
      dispatch(getUser());
    } else alert("Login failed !!!");
  };
};
const getUser = () => {
  return async (dispatch) => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    dispatch({
      type: FETCH_USER_SUCCESS,
      payload: response.data,
    });
  };
};
