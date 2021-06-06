import { serverAL } from '../api/api'
import { usersListStateType} from './types/redusersTypes'

// ==================action import======================
import * as actions from './actions/usersActions'
type getOnlyActionTypes<T> = T extends { [key: string]: infer U } ? U : never
type ActionTypesM = ReturnType<getOnlyActionTypes<typeof actions>>
// ========================================


const init = {
  usersList: [
    {
      id: 1 as number,
      firstName: 'load' as string | null,
      isFollow: false as boolean,
      lastName: 'load' as string | null,
      email: 'load' as string | null,
      title: 'Mr.' as string | null,
      picture: 'load' as string | null,
      quote: 'load' as string | null,
      adressCountry: 'load' as string | null,
      adressCity: 'load' as string | null,
      registerDate: 'load' as string | null,
      phone: 'load' as string | null
    }
  ],
  pageSettings: {
    currentPage: 1 as number,
    allUsersCount: 25 as number,
    maxUsersAtPage: 5 as number,
    isLoadinFinished: false as boolean
  }
}

// ========================================
function usersReducer(state:usersListStateType = init, action: ActionTypesM):usersListStateType {
  switch (action.type) {
    // --------------

    case 'CHANGE-FOLLOW/users': {
      return {
        ...state,
        usersList: state.usersList.map((now, id) => {
          if (now.id === action.id) {
            now.isFollow = !now.isFollow
          }
          return now
        })
      }
    }
    // --------------
    case 'GET-MORE-USERS/users': {
      return {
        ...state,
        usersList: [...action.data]
      }
    }

    // --------------
    case 'CHANGE-CURRENT-PAGE/users': {
      return {
        ...state,
        pageSettings: { ...state.pageSettings, currentPage: action.id }
      }
    }
    // --------------
    case 'LODAER-WAITER-CHANGER/users': {
      return {
        ...state,
        pageSettings: {
          ...state.pageSettings,
          isLoadinFinished: action.isFinished
        }
      }
    }
    // --------------
    case 'GET-MAX-USERS/users': {
      return {
        ...state,
        pageSettings: { ...state.pageSettings, allUsersCount: action.count }
      }
    }

    // --------------
    default:
      return state
  }
}
// ========================================

// ========================================
export const getUsersPageThunkCreator =
  (Page = 1, maxUsersAtPage = 5) =>
  async (dispatch: Function) => {
    try {
      dispatch(actions.changeIsFinished(false))
      const userListData = await serverAL.getUsersList(Page, maxUsersAtPage)
      dispatch(actions.getMaxUsers(userListData.count))
      dispatch(actions.updateUserChange(userListData.data))
      dispatch(actions.changeCurPage(Page))
      dispatch(actions.changeIsFinished(true))
    } catch (err) {
      console.log(err)
    }
  }
// ---------------------------------------
export const changeSubscribeThunkCreator =
  (userID = 1, buttonEvent: any, subBool = false) =>
  async (dispatch: Function) => {
    try {
      buttonEvent.target.disabled = true
      dispatch(actions.changeIsFinished(false))
      const buttPressAnswer = await serverAL.buttonPressed(userID, !subBool)
      console.log(buttPressAnswer)
      dispatch(actions.userFollowChange(userID))
      buttonEvent.target.disabled = false
      dispatch(actions.changeIsFinished(true))
    } catch (err) {
      console.log(err)
    }
  }

// ========================================
export default usersReducer
