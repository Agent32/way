import { serverAL } from "../api/api";
import { changeLoadStatus } from "./actions/actionCommonReduser";
import { pmMainType } from "./types/redusersTypes";

// ========================================

const SET_USERS_LIST_PM = "SET-USERS-LIST-PM/message-part";
const SET_CURRENT_DIEALOGS_PM = "SET-CURRENT-DIEALOGS-PM/message-part";
const ADD_NEW_PM = "ADD-NEW-PM/message-part";
// ========================================

export const setUsersListPM = (data: any) => ({
  type: SET_USERS_LIST_PM,
  data,
});
export const setCuttentDialog = (data: any) => ({
  type: SET_CURRENT_DIEALOGS_PM,
  data,
});
export const setIsUserSelected = (bul: boolean) => ({
  type: SET_CURRENT_DIEALOGS_PM,
  bul,
});
export const addSendPm = (data: any) => ({
  type: ADD_NEW_PM,
  data,
});
// ========================================
type pmActionType =
  {
    type: typeof SET_USERS_LIST_PM | typeof SET_CURRENT_DIEALOGS_PM | typeof ADD_NEW_PM,
    bul?: boolean,
    data?: any
  }

type reducerExecutiveFunction = (state: pmMainType, action: pmActionType) => pmMainType

const init = {
  usersPMlist: [{
    adressCity: "load",
    adressCountry: "load",
    email: "load",
    firstName: "load",
    id: 2,
    isFollow: false,
    lastName: "load",
    phone: "load",
    picture: "load",
    quote: "load",
    registerDate: "load",
    title: "load",
  }],
  selectedDiadlog: [
    {
      userId: 2,
      text: "load",
      avatar: "load",
      pmId: 2,
      firstName: "load",
    },
  ],
  pmSettings: {
    isUserSelected: false,
  },
};

// ========================================
function messageReducer(state = init, action: pmActionType): pmMainType {
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
const _setUsersList: reducerExecutiveFunction = (state, action) => {
  return {
    ...state,
    usersPMlist: [...action.data],
  };
}
// ---------------------------------------
const _setCurrentDialog: reducerExecutiveFunction = (state, action) => {
  return {
    ...state,
    selectedDiadlog: [...action.data],
  };
}
// ---------------------------------------
const _pushPM: reducerExecutiveFunction = (state, action) => {
  return {
    ...state,
    selectedDiadlog: [...state.selectedDiadlog, action.data],
  };
}
// ---------------------------------------
export const getUsersPMlistTC = (data: any) => async (dispatch: Function) => {
  try {
    dispatch(changeLoadStatus(true));
    const userAnsw = await serverAL.getSubscrUsers();

    dispatch(setUsersListPM(userAnsw.data));
    dispatch(changeLoadStatus(false));
  } catch (err) {
    console.log(err);
  }
};

export const getCurrentDialogPM = (id: number) => async (dispatch: Function) => {
  try {
    dispatch(changeLoadStatus(true));
    const dialogsAnsw = await serverAL.getCurrPM(id);

    dispatch(setCuttentDialog(dialogsAnsw));
    dispatch(changeLoadStatus(false));
  } catch (err) {
    console.log(err);
  }
};

export default messageReducer;
