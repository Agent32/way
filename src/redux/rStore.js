import { combineReducers, createStore } from "redux";

import bodyReducer from "./bodyReducer";
import leftColonePartReducer from "./leftColonyReducer";
import massageReducer from "./massageReducer";
import usersReducer from "./userReducer";



let reducersPush = combineReducers({
  bodyPart: bodyReducer,
  massagePart: massageReducer,
  usersPart: usersReducer,
  leftColonePart: leftColonePartReducer,
});

const store = createStore(reducersPush);
export default store;
