import { combineReducers } from "redux";
import musicReducer from "./musicReducer";
import userReducer from "./userReducer";
const reducers = combineReducers({
  musicReducer,
  userReducer,
});

export default reducers;
