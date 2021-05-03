//import { cloneDeep } from "lodash";
// ========================================
const TRY_LOGIN = "TRY-LOGIN";
const TRY_LOGOUT = "TRY-LOGOUT";
const EDIT_LOGIN = "EDIT-LOGIN";
const EDIT_PASSWORD = "EDIT_PASSWORD";


// ========================================
export const tryLogin = (data) => ({ type: TRY_LOGIN, data });
// --------------
export const editLoginArea = (text) => ({ type: EDIT_LOGIN, text });
// --------------
export const editPasswordArea = (text) => ({ type: EDIT_PASSWORD, text });
// --------------
// --------------
export const tryLogout = () => ({ type: TRY_LOGOUT });
// ========================================

const init = {
  userData: {
    token: "",
    inputLogin: "",
    inputPassword: "",
    isLoggedIn: false,
    loginData: {
      userName: "",
      avatar: "",
    },
  },
};
// ========================================

function autorizationReduser(state = init, action) {
  switch (action.type) {
    // --------------

    case TRY_LOGIN: {
      return _loginSend(state, action);
    }
    // --------------
    case EDIT_LOGIN: {
      return _editLoginArea(state, action);
    }
    // --------------
    case EDIT_PASSWORD: {
      return _editPasswordArea(state, action);
    }
    // --------------

    case TRY_LOGOUT: {
      return _logout(state, action);
    }
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
    userData: {
      ...state.userData,
      isLoggedIn: true,
      inputLogin: "",
      inputPassword: "",
      token: action.data.token,
      loginData: {
        userName: action.data.userName,
        avatar: action.data.avatar
      }
    },
  };
}
// ---------------------------------------
function _editLoginArea(state, action) {
  return {
    ...state,
    userData: { inputLogin: action.text },
  };
}
// ---------------------------------------
function _editPasswordArea(state, action) {
  
  return {
    ...state,
    userData: { inputPassword: action.text },
  };
}
// ---------------------------------------

// ---------------------------------------
function _logout(state, action) {
  
  return {
    ...state,
    userData: { 
      
      ...state.userData,
      isLoggedIn: false,
      inputLogin: "",
      inputPassword: "",
      token: "",
      loginData: {
        userName: "",
        avatar: "" }
     
    },
  };
}

export default autorizationReduser;
