import { DELETE_USER, DELETE_USER_SUCCESS, FETCH_USER_SUCCESS } from "./action";

const initialState = {
  users: [],
};
const rootReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case FETCH_USER_SUCCESS:
      return { ...state, users: [...action.payload] };
    case DELETE_USER_SUCCESS:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };
    default:
      return state;
  }
};
export default rootReducer;
