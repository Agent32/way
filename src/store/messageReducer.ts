import { serverAL } from '../api/api'
import { changeLoadStatus } from './actions/actionCommonReduser'
import { pmMainType } from './types/redusersTypes'

// ==================action import======================
import * as actions from './actions/privateMassageActions'
import { Dispatch } from 'react'
type getOnlyActionTypes<T> = T extends { [key: string]: infer U } ? U : never
type ActionTypesM = ReturnType<getOnlyActionTypes<typeof actions>>
// ========================================

// ========================================

const init = {
  usersPMlist: [
    {
      adressCity: 'load',
      adressCountry: 'load',
      email: 'load',
      firstName: 'load',
      id: 2,
      isFollow: false,
      lastName: 'load',
      phone: 'load',
      picture: 'load',
      quote: 'load',
      registerDate: 'load',
      title: 'load'
    }
  ],
  selectedDiadlog: [
    {
      userId: 2,
      text: 'load',
      avatar: 'load',
      pmId: 2,
      firstName: 'load'
    }
  ],
  pmSettings: {
    isUserSelected: false
  }
}

// ========================================
function messageReducer(
  state: pmMainType = init,
  action: ActionTypesM
): pmMainType {
  switch (action.type) {
    // --------------

    // --------------
    case 'SET-USERS-LIST-PM/message-part': {
      return {
        ...state,
        usersPMlist: [...action.data]
      }
    }
    // --------------
    case 'SET-CURRENT-DIEALOGS-PM/message-part': {
      return {
        ...state,
        selectedDiadlog: [...action.data]
      }
    }

    // --------------
    case 'ADD-NEW-PM/message-part': {
      return {
        ...state,
        selectedDiadlog: [...state.selectedDiadlog, action.data]
      }
    }
    // --------------
    default:
      return state
  }
}
// ========================================

export const getUsersPMlistTC = () => async (dispatch: Dispatch<ActionTypesM | ReturnType<typeof changeLoadStatus>>) => {
  try {
    dispatch(changeLoadStatus(true))
    const userAnsw = await serverAL.getSubscrUsers()

    dispatch(actions.setUsersListPM(userAnsw.data))
    dispatch(changeLoadStatus(false))
  } catch (err) {
    console.log(err)
  }
}

export const getCurrentDialogPrivatTC =
  (id: number | string) =>
  async (
    dispatch: Dispatch<ActionTypesM | ReturnType<typeof changeLoadStatus>>
  ) => {
    try {
      dispatch(changeLoadStatus(true))
      const dialogsAnsw = await serverAL.getCurrPM(+id)

      dispatch(actions.setCuttentDialog(dialogsAnsw))
      dispatch(changeLoadStatus(false))
    } catch (err) {
      console.log(err)
    }
  }

export default messageReducer
