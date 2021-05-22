import { cloneDeep } from "lodash";
import { serverAL } from "../api/api";

// ========================================
const CHANGE_FOLLOW = "CHANGE-FOLLOW";
const GET_MORE_USERS = "GET-MORE-USERS";
const CHANGE_CURRENT_PAGE = "CHANGE-CURRENT-PAGE";
const LODAER_WAITER_CHANGER = "LODAER-WAITER-CHANGER";
const GET_MAX_USERS = "GET-MAX-USERS";

// ========================================
export const userFollowChange = (id) => ({
  type: CHANGE_FOLLOW,
  id: id,
});
// --------------
export const updateUserChange = (id) => ({
  type: GET_MORE_USERS,
  id: id,
});
// --------------
export const changeCurPage = (id) => ({
  type: CHANGE_CURRENT_PAGE,
  id: id,
});
// --------------
export const changeIsFinished = (isFinished) => ({
  type: LODAER_WAITER_CHANGER,
  isFinished: isFinished,
});
// --------------
export const getMaxUsers = (count) => ({
  type: GET_MAX_USERS,
  count,
});
// --------------

//------------------------------------------
const friendTest = [
  {
    id: 111,
    isFollow: false,
    firstName: "Борян",
    lastName: "Полякович",
    email: "nicituEbal@mail",
    title: "mr",
    picture: "https://cdn.discordapp.com/emojis/814691159544561685.png?v=1",
  },
  {
    id: 222,
    isFollow: false,
    firstName: "Cаня",
    lastName: "зауральский1087",
    email: "nicituEbal@mail",
    title: "mr",
    picture: "https://cdn.discordapp.com/emojis/814691159544561685.png?v=1",
  },
  {
    id: 333,
    isFollow: false,
    firstName: "Никита",
    lastName: "Питерский",
    email: "nicituEbal@mail",
    title: "mr",
    picture: "https://cdn.discordapp.com/emojis/814691159544561685.png?v=1",
  },
  {
    id: 444,
    isFollow: false,
    firstName: "Барак",
    lastName: "Обэма",
    email: "russkievpered@mail",
    title: "mr",
    picture: "https://cdn.discordapp.com/emojis/814691159544561685.png?v=1",
  },
];
// ========================================
//https://60885809a6f4a300174263e9.mockapi.io/Test
//state= this._state.massagePart//

/*
https://60885809a6f4a300174263e9.mockapi.io/Test/?id=5 
https://60885809a6f4a300174263e9.mockapi.io/Test/?page=1&limit=10
https://mockapi.io/docs
*/

const init = {
  usersList: [
    {
      id: 1,
      isFollow: false,
      firstName: "Борян",
      lastName: "Полякович",
      email: "nicituEbal@mail",
      title: "mr",
      picture: "https://cdn.discordapp.com/emojis/814691159544561685.png?v=1",
      adressCity: "gaga",
      adressCountry: "baba",
      quote: "waaaa wa wa",
    },
  ],
  pageSettings: {
    currentPage: 1,
    allUsersCount: 25,
    maxUsersAtPage: 5,
    isLoadinFinished: false,
  },
};
// ========================================
function usersReducer(state = init, action) {
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

// ---------------------------------------
function _changeFollowed(state, action) {
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

function _getUsrs(state, action) {
  return {
    ...state,
    usersList: [...action.id],
  };
}

// ---------------------------------------

function _usersPageSwitch(state, action) {
  return {
    ...state,
    pageSettings: { ...state.pageSettings, currentPage: action.id },
  };
}
// ---------------------------------------

function _loaderWaitSwitch(state, action) {
  return {
    ...state,
    pageSettings: {
      ...state.pageSettings,
      isLoadinFinished: action.isFinished,
    },
  };
}
// ---------------------------------------
function _setMaxUsers(state, action) {
  return {
    ...state,
    pageSettings: { ...state.pageSettings, allUsersCount: action.count },
  };
}

// ========================================
export const getUsersPageThunkCreator =
  (Page = 1, maxUsersAtPage = 5) =>
  async (dispatch) => {
    try{
    dispatch(changeIsFinished(false));
    const userListData = await serverAL.getUsersList(Page, maxUsersAtPage);
    dispatch(getMaxUsers(userListData.count));
    dispatch(updateUserChange(userListData.data));
    dispatch(changeCurPage(Page));
    dispatch(changeIsFinished(true));
  }
  catch (err) { console.log(err) }
  };
// ---------------------------------------
export const changeSubscribeThunkCreator =
  (userID, buttonEvent, subBool) => async (dispatch) => {
    try {
    buttonEvent.target.disabled = true;
    dispatch(changeIsFinished(false));
    const buttPressAnswer = await serverAL.buttonPressed(userID, !subBool);
    console.log(buttPressAnswer);
    dispatch(userFollowChange(userID));
    buttonEvent.target.disabled = false;
    dispatch(changeIsFinished(true));
  }
  catch (err) { console.log(err) }
  };

// ========================================
export default usersReducer;
