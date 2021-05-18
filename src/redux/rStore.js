import { applyMiddleware, combineReducers, createStore } from "redux";

import bodyReducer from "./profileReducer";
import leftColonePartReducer from "./leftColonyReducer";
import massageReducer from "./massageReducer";
import usersReducer from "./usersReducer";
import autorizationReduser from "./autorizationReduser";
import thunk from "redux-thunk";  //thunk middleware
import { reducer as formReducer } from 'redux-form'
import commonReduser from "./commonReduser";

import { composeWithDevTools } from 'redux-devtools-extension';




let reducersPush = combineReducers({
  bodyPart: bodyReducer,
  massagePart: massageReducer,
  usersPart: usersReducer,
  leftColonePart: leftColonePartReducer,
  autorizationPart: autorizationReduser,
   commonPart: commonReduser,
  form: formReducer,
});



const store = createStore(reducersPush, composeWithDevTools(applyMiddleware(thunk)));
export default store;
