import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import thunk from "redux-thunk";
import rootReducer from "./manageUser/reducer";
import rootSaga from "./manageUser/userSaga";

// Apply middleware
const sagaMiddleware = createSagaMiddleware();

// Đăng kí reducer cho redux quản lí
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

// Chạy middleware cho redux để chạy các effect tại dòng code
sagaMiddleware.run(rootSaga);
// const store = createStore(rootReducer);

export default store;
