// import { cloneDeep } from "lodash";

import { serverAL } from '../api/api'

import * as actions from './actions/actionCommonReduser'
type getOnlyActionTypes<T> = T extends { [key: string]: infer U } ? U : never
type ActionTypesM = ReturnType<getOnlyActionTypes<typeof actions>>

const init = {
  loadingModules: {
    isSomethingLoading: false,
    isInitComplete: false
  }
}

type mainRedType = typeof init
function commonReduser(state = init, action: ActionTypesM): mainRedType {
  switch (action.type) {
    // --------------

    case 'CHANGE-LOADING-STATUS': {
      //-----------------------------------------------
      return {
        ...state,
        loadingModules: { ...state.loadingModules, isSomethingLoading: action.status }
      }
    }
    case 'APP-INIT-DONE': {
      //-----------------------------------------------
      return {
        ...state,
        loadingModules: { ...state.loadingModules, isInitComplete: true }
      }
    }
    default:
      return state
  }
}
// ========================================

export const initPageTC = () => {
  return (dispatch: Function) => {
    dispatch(actions.changeLoadStatus(false))

    const promiseMass: any = []
    promiseMass.push(serverAL.userInit())

    Promise.all([promiseMass]).then(() => {
      dispatch(actions.initComplete())
      dispatch(actions.changeLoadStatus(true))
    })
  }
}
export default commonReduser
