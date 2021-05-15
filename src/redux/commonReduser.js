//import { cloneDeep } from "lodash";

import { serverAL } from "./dal/api";

// ========================================
const CHANGE_LOADING_STATUS = "CHANGE-LOADING-STATUS";
const APP_INIT_DONE = "APP-INIT-DONE";


// ========================================
export const changeLoadStatus = (status) => ({ type: CHANGE_LOADING_STATUS, status });
// --------------
export const initComplete = () => ({ type: APP_INIT_DONE });
// ========================================

const init = {
  loadingModules: {
 isSomethingLoading:false,
 isInitComplete:false,
  },
};
// ========================================

function commonReduser(state = init, action) {
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
function _changeLoadStatus(state, action) {
  
  return {
    ...state,
    loadingModules: { isSomethingLoading: action.status },
  };
}
// ---------------------------------------
function _appInitComplete(state, action) {
  
  return {
    ...state,
    loadingModules: { isInitComplete: true },
  };
}
// ========================================
// ========================================

export const initPageTC = () => {
  return (dispatch) => {
   
    dispatch(changeLoadStatus(false));

  const promiseMass = promiseMass.push(  serverAL.userInit() )

   Promise.all([promiseMass]).then ( ()=> { 
      dispatch(initComplete())
      dispatch(changeLoadStatus(true));
    })
  };
};
export default commonReduser;
