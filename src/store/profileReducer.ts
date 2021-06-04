import { serverAL } from "../api/api";
import { profileMainType, userType } from "./types/redusersTypes";
// ========================================
const GET_USER = "GET-USER";
const LODAER_WAITER_CHANGER = "LODAER-WAITER-CHANGER";
const EDIT_QUOTE_TEXT = "EDIT-QUOTE-TEXT";
const ENABLE_EDIT_ELEMENT = "ENABLE_EDIT_ELEMENT";
const DISABLE_EDIT_ELEMENT = "DISABLE_EDIT_ELEMENT";
const EDIT_CURR_ELEM = "EDIT-CURR-ELEM";
const GET_USER_WALL = "GET-USER-WALL";
const WALL_LIKE_BUTTON_CHANGE = "WALL-LIKE-BUTTON-CHANGE";
// ========================================
//----------------------------
function actionTypesString < T extends string > (arg: T): T {return arg}
//----------------------------
export const getUser = (userProfiledata: userType) => ({ type: GET_USER, userProfiledata });


//export const getUser = createAction('GET-USER', (userProfiledata: userType) => userProfiledata);
// --------------
export const changeIsFinished = (isFinished: boolean) => ({
  type: actionTypesString('LODAER-WAITER-CHANGER'),
  isFinished: isFinished,
}as const);
// --------------
export const editQuote = (text: string) => ({ type: EDIT_QUOTE_TEXT, text });
// --------------
export const enableEditElement = (elem: any) => ({
  type: ENABLE_EDIT_ELEMENT,
  elem,
}as const);
// --------------
export const diesableEditElement = () => ({
  type: DISABLE_EDIT_ELEMENT,
} as const);
// --------------
export const editProfilePart = (text: string) => ({
  type: EDIT_CURR_ELEM,
  text,
} as const);
// --------------
export const getUserWallPost = (data: any) => ({
  type: GET_USER_WALL,
  data,
} as const);
// --------------
export const likeChange = (userid: number, postId: number) => ({
  type: WALL_LIKE_BUTTON_CHANGE,
  userid,
  postId,
} as const);
// ========================================


type profileActionType =
  {
    type:  typeof GET_USER |
    typeof LODAER_WAITER_CHANGER | typeof EDIT_QUOTE_TEXT | typeof DISABLE_EDIT_ELEMENT |
    typeof EDIT_CURR_ELEM | typeof GET_USER_WALL | typeof WALL_LIKE_BUTTON_CHANGE | typeof ENABLE_EDIT_ELEMENT,
    text?: any,
    elem?: any,
    userid?: number,
    postId?: number,
    isFinished: boolean ,
    userProfiledata:userType,
    data?: any
  }

type reducerProfileExecutiveFunction = (state: profileMainType, action: profileActionType) => profileMainType


const init = {
  // ---------------------------------------
  postsWall: [
    {
      id: 1,
      userId: 1,
      picture: "loading",
      text: "loading",
      createdAt: "loading",
      likes: false,
    },
  ],
  // ---------------------------------------
  profileSettings: {
    wallText: "",
    isLoadinFinished: false,
    whatEdit: null,
    isEditorOneNeed: false,
  },
  // ---------------------------------------
  userData: {
    id: 1,
    title: `loading`,
    firstName: `loading`,
    lastName: `loading`,
    email: `loading`,
    dateOfBirth: `loading`,
    isFollow: false,
    registerDate: `loading`,
    phone: `loading`,
    quote: ``,
    picture: ``,
    adressCity: ``,
    adressCountry: ``,
  },
};
// ========================================

function bodyReducer(state = init, action: profileActionType): profileMainType {
  switch (action.type) {
    // --------------

 
    // --------------
    case GET_USER: {
      return _getUser(state, action);
    }
    // --------------
    case GET_USER_WALL: {
      return _getUsrWall(state, action);
    }
    // --------------
    case LODAER_WAITER_CHANGER: {
      return _loaderWaitSwitch(state, action);
    }
    // --------------
    case EDIT_QUOTE_TEXT: {
      return _editChangeStatus(state, action)
    }
    // --------------
    case ENABLE_EDIT_ELEMENT: {
      return _enableEditElement(state, action);
    }
    // --------------
    case DISABLE_EDIT_ELEMENT: {
      return _disableEditElement(state, action);
    }
    // --------------
    case EDIT_CURR_ELEM: {
      return _editCurrElem(state, action);
    }
    // --------------
    case WALL_LIKE_BUTTON_CHANGE: {
      return _changeLike(state, action);
    }

    // --------------
    default:
      return state;
  }
}
// ========================================

// ---------------------------------------
const _getUser: reducerProfileExecutiveFunction = (state, action) => {
  return {
    ...state,
    userData: { ...action.userProfiledata },
  };
}
// ---------------------------------------
const _loaderWaitSwitch: reducerProfileExecutiveFunction = (state, action) => {
  return {
    ...state,
    profileSettings: { ...state.profileSettings, isLoadinFinished: action.isFinished },
  };
}
// ---------------------------------------
const _editChangeStatus: reducerProfileExecutiveFunction = (state, action) => {
  return {
    ...state,
    userData: { ...state.userData, quote: action.text },
  };
}  
// ---------------------------------------
const _enableEditElement: reducerProfileExecutiveFunction = (state, action) => {
  return {
    ...state,
    profileSettings: {
      ...state.profileSettings,
      isEditorOneNeed: true,
      whatEdit: action.elem,
    },
  };
}
// ---------------------------------------
const _disableEditElement: reducerProfileExecutiveFunction = (state, action) => {
  return {
    ...state,
    profileSettings: {
      ...state.profileSettings,
      isEditorOneNeed: false,
      whatEdit: "",
    },
  };
}
// ---------------------------------------
const _editCurrElem: reducerProfileExecutiveFunction = (state, action) => {
  return {
    ...state,
    userData: { ...state.userData, [state.profileSettings.whatEdit]: action.text },
  };
}
// ---------------------------------------
const _getUsrWall: reducerProfileExecutiveFunction = (state, action) => {
  return {
    ...state,
    postsWall: [...action.data],
  };
}
// ---------------------------------------
const _changeLike: reducerProfileExecutiveFunction = (state, action) => {
  return {
    ...state,
    postsWall: state.postsWall.map((now, id) => {
      if (now.id === action.postId) {
        now.likes = !now.likes;
      }
      return now;
    }),
  };
}

// ---------------------------------------
// ========================================

export const getUserByIdTC =
  (userID = 1) =>
    async (dispatch:Function) => {
      try {
        dispatch(changeIsFinished(false));

        const userAnswer = await serverAL.getUserbyId(userID);
        dispatch(getUser(userAnswer));

        const userQuote = await serverAL.getQuotebyUsrId(userID);
        dispatch(getUserWallPost(userQuote));

        dispatch(changeIsFinished(true));
      } catch (err) {
        console.log(err);
      }
    };
// ---------------------------------------
export const updateQuteServer = (id:number, whatEdit:string, text:string) => async (dispatch:Function) => {
  try {
    dispatch(changeIsFinished(false));
    await serverAL.updateElement(id, whatEdit, text);
    dispatch(diesableEditElement());
    dispatch(changeIsFinished(true));
  } catch (err) {
    console.log(err);
  }
};
// ---------------------------------------
export const likeChangeTC =
  (userID:number, postID:number, buttonEvent:any, subBool:boolean) => async (dispatch:Function) => {
    try {
      buttonEvent.target.disabled = true;
      dispatch(changeIsFinished(false));
      await serverAL.likeButtPressed(userID, postID, !subBool);
      dispatch(likeChange(userID, postID));
      buttonEvent.target.disabled = false;
      dispatch(changeIsFinished(true));
    } catch (err) {
      console.log(err);
    }
  };

// ---------------------------------------
export const newWallPostTC = (userID:number, data:any) => async (dispatch:Function) => {
  try {
    dispatch(changeIsFinished(false));

    const wallPostSucces = await serverAL.newWallPost(userID, data);

    const updateWallPost = await serverAL.getQuotebyUsrId(userID);
    dispatch(getUserWallPost(updateWallPost));
    dispatch(changeIsFinished(true));
  } catch (err) {
    console.log(err);
  }
};

// ---------------------------------------
// ========================================
export default bodyReducer;
