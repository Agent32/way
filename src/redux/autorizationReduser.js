//import { cloneDeep } from "lodash";
// ========================================
const TRY_LOGIN = "TRY-LOGIN";

// ========================================
export const tryLogin = (text) => ({ type: TRY_LOGIN, text });
// --------------


// ========================================

const init = {
  // ---------------------------------------
  
};
// ========================================

function autorizationReduser(state = init, action) {
  switch (action.type) {
    // --------------

    case TRY_LOGIN: {
      return _loginSend(state, action);
    }
    // --------------
   
    // --------------
    default:
      return state;
  }
}
// ========================================

// ---------------------------------------
function _loginSend(state, action) {
  return {
    ...state,
    changedText: { ...state.changedText, wallText: action.text },
  };
}
// ---------------------------------------

// ---------------------------------------

export default autorizationReduser;
