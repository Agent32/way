//import { cloneDeep } from "lodash";

import { loginMainData } from './types/redusersTypes'

// ==================action import======================
import * as actions from './actions/autorizationActions'
type getOnlyActionTypes<T> = T extends { [key: string]: infer U } ? U : never
type ActionTypesM = ReturnType<getOnlyActionTypes<typeof actions>>
// ========================================

const init: loginMainData = {
  userData: {
    inputLogin: '',
    inputPassword: '',
    isLoggedIn: false,
    loginData: {
      userName: '',
      avatar: ''
    }
  }
}
// ========================================

function autorizationReduser(
  state = init,
  action: ActionTypesM
): loginMainData {
  switch (action.type) {
    // ---------------------------------------
    case 'TRY-LOGIN': {
      return {
        ...state,
        userData: {
          ...state.userData,
          isLoggedIn: true,
          inputLogin: '',
          inputPassword: '',
          loginData: {
            userName: action.data.userName,
            avatar: action.data.avatar
          }
        }
      }
    }
    // ---------------------------------------
    case 'LOGIN-FORM-SUBMIT': {
      return {
        ...state,
        userData: {
          ...state.userData,
          isLoggedIn: true,
          inputLogin: '',
          inputPassword: '',
          loginData: {
            ...state.userData.loginData,
            userName: action.elem.userName
          }
        }
      }
    }
    // ---------------------------------------
    case 'TRY-LOGOUT': {
      return {
        ...state,
        userData: {
          ...state.userData,
          isLoggedIn: false,
          inputLogin: '',
          inputPassword: '',
          loginData: {
            userName: '',
            avatar: ''
          }
        }
      }
    }
    // --------------
    default:
      return state
  }
}
// ========================================

export default autorizationReduser
