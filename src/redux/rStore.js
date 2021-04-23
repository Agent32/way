import { combineReducers, createStore } from "redux";

import bodyReducer from "./bodyReducer";
import leftColonePartReducer from "./leftColonyReducer";
import massageReducer from "./massageReducer";



let reducersPush = combineReducers({
  bodyPart: bodyReducer,
  massagePart: massageReducer,
  leftColonePart: leftColonePartReducer,
});

const store = createStore(reducersPush);
export default store;
