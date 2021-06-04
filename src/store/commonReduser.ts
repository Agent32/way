/* eslint-disable @typescript-eslint/no-use-before-define */
//import { cloneDeep } from "lodash";

import { serverAL } from "../api/api";

// ========================================
const CHANGE_LOADING_STATUS = "CHANGE-LOADING-STATUS";
const APP_INIT_DONE = "APP-INIT-DONE";

// ========================================

//--------------
// ========================================
export const changeLoadStatus = (status: boolean) => ({
  type: CHANGE_LOADING_STATUS,
  status,
});


// --------------
export const initComplete = () => ({ type: APP_INIT_DONE });
// ========================================

type actionTypes = ReturnType<typeof changeLoadStatus> | ReturnType<typeof initComplete> 
  
const init = {
  loadingModules: {
    isSomethingLoading: false,
    isInitComplete: false,
  },
};

 type stateType = typeof init
// ========================================

function commonReduser(state = init, action:actionTypes) {
  switch (action.type) {
    // --------------

    case CHANGE_LOADING_STATUS: {
      return _changeLoadStatus(state, action);
    }
    case APP_INIT_DONE: {
      return _appInitComplete(state, action);
    }
    default:
      return state;
  }
}
// ========================================

// ---------------------------------------
function _changeLoadStatus(state:stateType, action:any) {
  return {
    ...state,
    loadingModules: { isSomethingLoading: action.status },
  };
}
// ---------------------------------------
function _appInitComplete(state:stateType, action:actionTypes) {
  return {
    ...state,
    loadingModules: { isInitComplete: true },
  };
}
// ========================================
// ========================================

export const initPageTC = () => {
  return (dispatch:Function) => {
    dispatch(changeLoadStatus(false));

    const promiseMass: any = []
      promiseMass.push(serverAL.userInit());

    Promise.all([promiseMass]).then(() => {
      dispatch(initComplete());
      dispatch(changeLoadStatus(true));
    });
  };
};
export default commonReduser;
