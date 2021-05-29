import { serverAL } from "../api/api";
import { usersListStateType, userType } from "./types/redusersTypes";

// ========================================
const CHANGE_FOLLOW = "CHANGE-FOLLOW";
const GET_MORE_USERS = "GET-MORE-USERS";
const CHANGE_CURRENT_PAGE = "CHANGE-CURRENT-PAGE";
const LODAER_WAITER_CHANGER = "LODAER-WAITER-CHANGER";
const GET_MAX_USERS = "GET-MAX-USERS";

// ========================================
export const userFollowChange = (id: number) => ({
  type: CHANGE_FOLLOW,
  id,
});
// --------------
export const updateUserChange = (data: Array<userType>) => ({
  type: GET_MORE_USERS,
  data,
});
// --------------
export const changeCurPage = (id: number) => ({
  type: CHANGE_CURRENT_PAGE,
  id,
});
// --------------
export const changeIsFinished = (isFinished: boolean) => ({
  type: LODAER_WAITER_CHANGER,
  isFinished,
});
// --------------
export const getMaxUsers = (count: number) => ({
  type: GET_MAX_USERS,
  count,
});
// --------------


type userActionType =
  {
    type: typeof CHANGE_FOLLOW | typeof GET_MORE_USERS | typeof CHANGE_CURRENT_PAGE | typeof LODAER_WAITER_CHANGER | typeof GET_MAX_USERS,
    count?: number,
    id?: number,
    isFinished?: boolean,
    data?: any
  }

// ========================================
const init = {
  usersList: [
    {
      id: 1 as number,
      firstName: "load" as string | null,
      isFollow: false as boolean,
      lastName: "load" as string | null,
      email: "load" as string | null,
      title: "Mr." as string | null,
      picture: "load" as string | null,
      quote: "load" as string | null,
      adressCountry: "load" as string | null,
      adressCity: "load" as string | null,
      registerDate: "load" as string | null,
      phone: "load" as string | null,
    },
  ],
  pageSettings: {
    currentPage: 1 as number,
    allUsersCount: 25 as number,
    maxUsersAtPage: 5 as number,
    isLoadinFinished: false as boolean,
  },
};



// ========================================
function usersReducer(state = init, action: userActionType) {
  switch (action.type) {
    // --------------

    case CHANGE_FOLLOW: {
      return _changeFollowed(state, action);
    }
    // --------------
    case GET_MORE_USERS: {
      return _getUsrs(state, action);
    }

    // --------------
    case CHANGE_CURRENT_PAGE: {
      return _usersPageSwitch(state, action);
    }
    // --------------
    case LODAER_WAITER_CHANGER: {
      return _loaderWaitSwitch(state, action);
    }
    // --------------
    case GET_MAX_USERS: {
      return _setMaxUsers(state, action);
    }

    // --------------
    default:
      return state;
  }
}
// ========================================

function _changeFollowed(state: usersListStateType, action: userActionType) {
  return {
    ...state,
    usersList: state.usersList.map((now, id) => {
      if (now.id === action.id) {
        now.isFollow = !now.isFollow;
      }
      return now;
    }),
  };
}
// ---------------------------------------

function _getUsrs(state: usersListStateType, action: userActionType) {

  return {
    ...state,
    usersList: [...action.data],
  };
}

// ---------------------------------------

function _usersPageSwitch(state: usersListStateType, action: userActionType) {
  return {
    ...state,
    pageSettings: { ...state.pageSettings, currentPage: action.id },
  };
}
// ---------------------------------------

function _loaderWaitSwitch(state: usersListStateType, action: userActionType) {
  return {
    ...state,
    pageSettings: {
      ...state.pageSettings,
      isLoadinFinished: action.isFinished,
    },
  };
}
// ---------------------------------------
function _setMaxUsers(state: usersListStateType, action: userActionType) {
  return {
    ...state,
    pageSettings: { ...state.pageSettings, allUsersCount: action.count },
  };
}

// ========================================
export const getUsersPageThunkCreator =
  (Page = 1, maxUsersAtPage = 5) =>
    async (dispatch: Function) => {
      try {
        dispatch(changeIsFinished(false));
        const userListData = await serverAL.getUsersList(Page, maxUsersAtPage);
        dispatch(getMaxUsers(userListData.count));
        dispatch(updateUserChange(userListData.data));
        dispatch(changeCurPage(Page));
        dispatch(changeIsFinished(true));
      } catch (err) {
        console.log(err);
      }
    };
// ---------------------------------------
export const changeSubscribeThunkCreator =
  (userID = 1, buttonEvent: any, subBool = false) => async (dispatch: Function) => {
    try {
      buttonEvent.target.disabled = true;
      dispatch(changeIsFinished(false));
      const buttPressAnswer = await serverAL.buttonPressed(userID, !subBool);
      console.log(buttPressAnswer);
      dispatch(userFollowChange(userID));
      buttonEvent.target.disabled = false;
      dispatch(changeIsFinished(true));
    } catch (err) {
      console.log(err);
    }
  };

// ========================================
export default usersReducer;
