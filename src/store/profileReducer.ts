import { serverAL } from '../api/api'
import { profileMainType, userType} from './types/redusersTypes'

// ==================action import======================
import * as actions from './actions/profileActions'
import { Dispatch } from 'react'
type getOnlyActionTypes<T> = T extends { [key: string]: infer U } ? U : never
type ActionTypesM = ReturnType<getOnlyActionTypes<typeof actions>>
// ========================================

// ========================================
const GET_USER = 'GET-USER/profile'
const LODAER_WAITER_CHANGER = 'LODAER-WAITER-CHANGER/profile'
const EDIT_QUOTE_TEXT = 'EDIT-QUOTE-TEXT/profile'
const ENABLE_EDIT_ELEMENT = 'ENABLE_EDIT_ELEMENT/profile'
const DISABLE_EDIT_ELEMENT = 'DISABLE_EDIT_ELEMENT/profile'
const EDIT_CURR_ELEM = 'EDIT-CURR-ELEM/profile'
const GET_USER_WALL = 'GET-USER-WALL/profile'
const WALL_LIKE_BUTTON_CHANGE = 'WALL-LIKE-BUTTON-CHANGE/profile'
// ========================================

const init = {
  // ---------------------------------------
  postsWall: [
    {
      id: 1,
      userId: 1,
      picture: 'loading',
      text: 'loading',
      createdAt: 'loading',
      likes: false
    }
  ],
  // ---------------------------------------
  profileSettings: {
    wallText: '',
    isLoadinFinished: false,
    whatEdit: null,
    isEditorOneNeed: false
  },
  // ---------------------------------------
  userData: {
    id: 1,
    title: `loading`,
    firstName: `loading`,
    lastName: `loading`,
    email: `loading`,
    dateOfBirth: `loading`,
    isFollow: false,
    registerDate: `loading`,
    phone: `loading`,
    quote: ``,
    picture: ``,
    adressCity: ``,
    adressCountry: ``
  }
}
// ========================================

function bodyReducer(
  state: profileMainType = init,
  action: ActionTypesM
): profileMainType {
  switch (action.type) {
    // --------------

    // --------------
    case GET_USER: {
      return {
        ...state,
        userData: { ...action.userProfiledata }
      }
    }
    // --------------
    case GET_USER_WALL: {
      return {
        ...state,
        postsWall: [...action.data]
      }
    }
    // --------------
    case LODAER_WAITER_CHANGER: {
      return {
        ...state,
        profileSettings: {
          ...state.profileSettings,
          isLoadinFinished: action.isFinished
        }
      }
    }
    // --------------
    case EDIT_QUOTE_TEXT: {
      return {
        ...state,
        userData: { ...state.userData, quote: action.text }
      }
    }
    // --------------
    case ENABLE_EDIT_ELEMENT: {
      return {
        ...state,
        profileSettings: {
          ...state.profileSettings,
          isEditorOneNeed: true,
          whatEdit: action.elem
        }
      }
    }
    // --------------
    case DISABLE_EDIT_ELEMENT: {
      return {
        ...state,
        profileSettings: {
          ...state.profileSettings,
          isEditorOneNeed: false,
          whatEdit: null
        }
      }
    }
    // --------------
    case EDIT_CURR_ELEM: {
      return {
        ...state,
        userData: {
          ...state.userData,
          [state.profileSettings.whatEdit as keyof userType]: action.text
        }
      }
    }
    // --------------
    case WALL_LIKE_BUTTON_CHANGE: {
      return {
        ...state,
        postsWall: state.postsWall.map((now, id) => {
          if (now.id === action.postId) {
            now.likes = !now.likes
          }
          return now
        })
      }
    }

    // --------------
    default:
      return state
  }
}

// ========================================

export const getUserByIdTC =
  (userID = '1') =>
  async (dispatch: Function) => {
    try {
      dispatch(actions.changeIsFinished(false))

      const userAnswer = await serverAL.getUserbyId(+userID)
      dispatch(actions.getUser(userAnswer))

      const userQuote = await serverAL.getQuotebyUsrId(+userID)
      dispatch(actions.getUserWallPost(userQuote))

      dispatch(actions.changeIsFinished(true))
    } catch (err) {
      console.log(err)
    }
  }
// ---------------------------------------
export const updateQuteServerTC =
  (id: number, whatEdit: keyof userType | null, text: any) =>
  async (dispatch: Dispatch<ActionTypesM>) => {
    try {
      dispatch(actions.changeIsFinished(false))
      await serverAL.updateElement(id, whatEdit, text)
      dispatch(actions.diesableEditElement())
      dispatch(actions.changeIsFinished(true))
    } catch (err) {
      console.log(err)
    }
  }
// ---------------------------------------
export const likeChangeTC =
  (userID: number, postID: number, buttonEvent: any, subBool: boolean) =>
  async (dispatch: Dispatch<ActionTypesM>) => {
    try {
      buttonEvent.target.disabled = true
      dispatch(actions.changeIsFinished(false))
      await serverAL.likeButtPressed(userID, postID, !subBool)
      dispatch(actions.likeChange(userID, postID))
      buttonEvent.target.disabled = false
      dispatch(actions.changeIsFinished(true))
    } catch (err) {
      console.log(err)
    }
  }

// ---------------------------------------
export const newWallPostTC =
  (userID: string|number, data: any) => async (dispatch: Dispatch<ActionTypesM>, getState:any) => {
    try {
      dispatch(actions.changeIsFinished(false))

      await serverAL.newWallPost(+userID, data)

      const updateWallPost = await serverAL.getQuotebyUsrId(+userID)
      dispatch(actions.getUserWallPost(updateWallPost))
      dispatch(actions.changeIsFinished(true))
    } catch (err) {
      console.log(err)
    }
  }

// ========================================
export default bodyReducer
