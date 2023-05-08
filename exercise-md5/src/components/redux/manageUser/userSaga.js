import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";
import {
  DELETE_USER,
  DELETE_USER_SUCCESS,
  FETCH_USER,
  FETCH_USER_SUCCESS,
} from "./action";

function* getUser(action) {
  try {
    const response = yield axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    // Sau khi lấy được dữ liệu từ fake API
    // Dispatch một action tới reducer kèm theo dữ liệu mà API trả về
    yield put({ type: FETCH_USER_SUCCESS, payload: response.data });
  } catch (error) {
    console.log("error - getUser : ", error);
  }
}
function* deleteUser(action) {
  console.log(action);
  const response = yield axios.delete(
    "https://jsonplaceholder.typicode.com/users/" + action.payload
  );
  yield put({ type: DELETE_USER_SUCCESS, payload: action.payload });
}
export default function* rootSaga() {
  yield takeLatest(FETCH_USER, getUser);
  yield takeLatest(DELETE_USER, deleteUser);
}
