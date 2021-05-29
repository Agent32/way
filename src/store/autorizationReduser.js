//import { cloneDeep } from "lodash";
// ========================================
const TRY_LOGIN = "TRY-LOGIN";
const TRY_LOGOUT = "TRY-LOGOUT";
const LOGIN_FORM_SUBMIT = "LOGIN-FORM-SUBMIT";

// ========================================
export const tryLogin = (data) => ({ type: TRY_LOGIN, data });
// --------------
// --------------
export const loginFormSubmit = (elem) => ({ type: LOGIN_FORM_SUBMIT, elem });
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

    case LOGIN_FORM_SUBMIT: {
      return _loginFormSubmit(state, action);
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
        avatar: action.data.avatar,
      },
    },
  };
}

// ---------------------------------------
// ---------------------------------------
function _loginFormSubmit(state, action) {
  //if (!action.elem.login) { return state}
  return {
    ...state,
    userData: {
      ...state.userData,
      isLoggedIn: true,
      inputLogin: "",
      inputPassword: "",
      token: "agagag",
      loginData: {
        userName: action.elem.login,
      },
    },
  };
}
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
        avatar: "",
      },
    },
  };
}

export default autorizationReduser;
