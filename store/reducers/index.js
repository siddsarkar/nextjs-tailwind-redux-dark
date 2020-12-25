import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import themeReducer from "./themeReducer";
import timerReducer from "./timerReducer";

export default combineReducers({
  counter: counterReducer,
  timer: timerReducer,
  theme: themeReducer,
});
