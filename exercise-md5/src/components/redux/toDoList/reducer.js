import { combineReducers } from "redux";

const initialState = [
  { id: 1, text: "Learn React" },
  { id: 2, text: "Learn Redux" },
  { id: 3, text: "Build something fun!" },
];
export const toDoReducers = (state = initialState, action) => {
  switch (action.type) {
    case "todos/add-job":
      return [...state, action.payload];
    case "todos/delete-job":
      return state.filter((job) => job.id !== action.payload);
    default:
      return state;
  }
};
export const rootReducer = combineReducers({ todos: toDoReducers });
