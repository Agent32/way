import { applyMiddleware, combineReducers, createStore } from "redux";

import bodyReducer from "./profileReducer";
import leftColonePartReducer from "./leftColonyReducer";
import massageReducer from "./massageReducer";
import usersReducer from "./usersReducer";
import autorizationReduser from "./autorizationReduser";
import thunk from "redux-thunk";  //thunk middleware




let reducersPush = combineReducers({
  bodyPart: bodyReducer,
  massagePart: massageReducer,
  usersPart: usersReducer,
  leftColonePart: leftColonePartReducer,
  autorizationPart: autorizationReduser,
});



const store = createStore(reducersPush, applyMiddleware(thunk));
export default store;
