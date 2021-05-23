import { cloneDeep } from "lodash";
import { serverAL } from "../api/api";
import { changeLoadStatus } from "./commonReduser";

// ========================================

const SET_USERS_LIST_PM = "SET-USERS-LIST-PM/message-part";
const SET_CURRENT_DIEALOGS_PM = "SET-CURRENT-DIEALOGS-PM/message-part";
const CHANGE_ISSELECTED_USER = "CHANGE_ISSELECTED_USER/message-part";
const ADD_NEW_PM = "ADD-NEW-PM/message-part";
// ========================================

export const setUsersListPM = (data) => ({
  type: SET_USERS_LIST_PM,
  data,
});
export const setCuttentDialog = (data) => ({
  type: SET_CURRENT_DIEALOGS_PM,
  data,
});
export const setIsUserSelected = (bul) => ({
  type: SET_CURRENT_DIEALOGS_PM,
  bul,
});
export const addSendPm = (data) => ({
  type: ADD_NEW_PM,
  data,
});
// ========================================

const init = {
  usersPMlist: [{ id: 0, firstName: "Borya", picture: "" }],
  selectedDiadlog: [
    {
      text: "",
      avatar: "",
      pmId: "",
      firstName: "",
    },
  ],
  pmSettings: {
    isUserSelected: false,
  },
};

// ========================================
function messageReducer(state = init, action) {
  switch (action.type) {
    // --------------

    // --------------
    case SET_USERS_LIST_PM: {
      return _setUsersList(state, action);
    }
    // --------------
    case SET_CURRENT_DIEALOGS_PM: {
      return _setCurrentDialog(state, action);
    }
    // --------------
    case CHANGE_ISSELECTED_USER: {
      return _switchIsSelected(state, action);
    }
    // --------------
    case ADD_NEW_PM: {
      return _pushPM(state, action);
    }
    // --------------
    default:
      return state;
  }
}
// ========================================

// ---------------------------------------

// ---------------------------------------
function _switchIsSelected(state, action) {
  return {
    ...state,
    changedText: { ...state.changedText, PMtext: action.text },
  };
}
// ---------------------------------------
function _setUsersList(state, action) {
  return {
    ...state,
    usersPMlist: [...action.data],
  };
}
// ---------------------------------------
function _setCurrentDialog(state, action) {
  return {
    ...state,
    selectedDiadlog: [...action.data],
  };
}
// ---------------------------------------
function _pushPM(state, action) {
  return {
    ...state,
    selectedDiadlog: [...state.selectedDiadlog, action.data],
  };
}
// ---------------------------------------
export const getUsersPMlistTC = (data) => async (dispatch) => {
  try {
    dispatch(changeLoadStatus(true));
    const userAnsw = await serverAL.getSubscrUsers();

    dispatch(setUsersListPM(userAnsw.data));
    dispatch(changeLoadStatus(false));
  } catch (err) {
    console.log(err);
  }
};

export const getCurrentDialogPM = (id) => async (dispatch) => {
  try {
    dispatch(changeLoadStatus(true));
    const dialogsAnsw = await serverAL.getCurrPM(id);

    dispatch(setCuttentDialog(dialogsAnsw));
    dispatch(changeLoadStatus(false));
  } catch (err) {
    console.log(err);
  }
};

export const newPM = (userID, data) => async (dispatch) => {
  try {
    dispatch(changeLoadStatus(false));

    const wallPostSucces = await serverAL.sendPM(userID, data);

    const updateWallPost = await serverAL.getQuotebyUsrId(userID);
    dispatch(updateWallPost);
    dispatch(changeLoadStatus(true));
  } catch (err) {
    console.log(err);
  }
};

export default messageReducer;
