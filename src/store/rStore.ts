import { applyMiddleware, combineReducers, createStore } from 'redux'

import bodyReducer from './profileReducer'
import leftColonePartReducer from './leftColonyReducer'
import messageReducer from './messageReducer'
import usersReducer from './usersReducer'
import autorizationReduser from './autorizationReduser'
import newsReducer from './newsReducer'
import thunk from 'redux-thunk' //thunk middleware
import { reducer as formReducer } from 'redux-form'
import commonReduser from './commonReduser'

import { composeWithDevTools } from 'redux-devtools-extension'

const reducersPush = combineReducers({
  bodyPart: bodyReducer,
  massagePart: messageReducer,
  usersPart: usersReducer,
  leftColonePart: leftColonePartReducer,
  autorizationPart: autorizationReduser,
  commonPart: commonReduser,
  newsPart: newsReducer,
  form: formReducer
})

const store = createStore(
  reducersPush,
  composeWithDevTools(applyMiddleware(thunk))
)

export type mainStateType = ReturnType<typeof reducersPush>
export default store
