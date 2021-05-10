//import { cloneDeep } from "lodash";
// ========================================
const CHANGE_LOADING_STATUS = "CHANGE-LOADING-STATUS";



// ========================================
export const changeLoadStatus = (status) => ({ type: CHANGE_LOADING_STATUS, status });
// --------------

// ========================================

const init = {
  loadingModules: {
 isSomethingLoading:false
  },
};
// ========================================

function commonReduser(state = init, action) {
  switch (action.type) {
    // --------------

    case CHANGE_LOADING_STATUS: {
      return _changeLoadStatus(state, action);
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


export default commonReduser;
