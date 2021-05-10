//import { cloneDeep } from "lodash";

import { serverAL } from "./dal/api";

// ========================================
const WALL_POST_PUBLISH = "WALL-POST-PUBLISH";
const TEXTAREA_EDIT_WALL = "TEXTAREA-EDIT-WALL";
const GET_USER = "GET-USER";
const LODAER_WAITER_CHANGER = "LODAER-WAITER-CHANGER";
const EDIT_QUOTE_TEXT = "EDIT-QUOTE-TEXT";
const ENABLE_EDIT_ELEMENT = "ENABLE_EDIT_ELEMENT";
const DISABLE_EDIT_ELEMENT = "DISABLE_EDIT_ELEMENT";
const EDIT_CURR_ELEM = "EDIT-CURR-ELEM";
// ========================================
export const wallPostSend = (text) => ({ type: WALL_POST_PUBLISH, text });
//----------------------------
export const wallPostEdit = (text) => ({
  type: TEXTAREA_EDIT_WALL,
  text: text,
});
//----------------------------
export const getUser = (text) => ({ type: GET_USER, text });
// --------------
export const changeIsFinished = (isFinished) => ({
  type: LODAER_WAITER_CHANGER,
  isFinished: isFinished,
});
// --------------
export const editQuote = (text) => ({ type: EDIT_QUOTE_TEXT, text });
// --------------
export const enableEditElement = (elem) => ({
  type: ENABLE_EDIT_ELEMENT,
  elem,
});
// --------------
export const diesableEditElement = () => ({
  type: DISABLE_EDIT_ELEMENT,
});
// --------------
export const editProfilePart = (text) => ({
  type: EDIT_CURR_ELEM,
  text,
});
// ========================================
//state= this._state.bodyPart

/*
"https://www.vokrug.tv/pic/person/2/b/f/4/2bf448098b7badf3b37e87c510da29bc.jpeg",
    "Anon",
    "2 jan",
    "Minsk",
    "HNAGH-11",
    "https://learn.javascript",
    */

const init = {
  // ---------------------------------------
  postsWall: [
    {
      avatarImg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq_I0JFO2DxoAV3J-sI7ajtx0qW0Q5neaY_A&usqp=CAU",
      text: "I hate my life",
      date: "27.01.21",
      likes: 2,
    },
    {
      avatarImg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq_I0JFO2DxoAV3J-sI7ajtx0qW0Q5neaY_A&usqp=CAU",
      text: "Fuck de system",
      date: "23.02.21",
      likes: 5,
    },
  ],
  // ---------------------------------------
  changedText: {
    wallText: "",
    isLoadinFinished: false,
    whatEdit: null,
    isEditorOneNeed: false,
  },
  // ---------------------------------------
  userData: {
    id: `loading`,
    title: `loading`,
    firstName: `loading`,
    lastName: `loading`,
    email: `loading`,
    dateOfBirth: `loading`,
    registerDate: `loading`,
    phone: `loading`,
    quote: ``,
    picture: ``,
    adressCity: ``,
    adressCountry: ``,
  },
};
// ========================================

function bodyReducer(state = init, action) {
  switch (action.type) {
    // --------------

    case TEXTAREA_EDIT_WALL: {
      return _textAreaEditWall(state, action);
    }
    // --------------
    case WALL_POST_PUBLISH: {
      return _postWallComment(state, action);
    }
    // --------------
    case GET_USER: {
      return _getUser(state, action);
    }
    // --------------
    case LODAER_WAITER_CHANGER: {
      return _loaderWaitSwitch(state, action);
    }
    // --------------
    case EDIT_QUOTE_TEXT: {
      return _editChangeStatus(state, action);
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
    default:
      return state;
  }
}
// ========================================

// ---------------------------------------
function _textAreaEditWall(state, action) {
  return {
    ...state,
    changedText: { ...state.changedText, wallText: action.text },
  };
}
// ---------------------------------------
function _postWallComment(state, action) {
  
  const curr = {
    avatarImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq_I0JFO2DxoAV3J-sI7ajtx0qW0Q5neaY_A&usqp=CAU",
    text: action.text.postArea,
    date: "15.04.21",
    likes: 0,
  };

  return {
    ...state,
    postsWall: [...state.postsWall, curr],
    changedText: { ...state.changedText, wallText: "" },
  };
}
// ---------------------------------------
function _getUser(state, action) {
  return {
    ...state,
    userData: { ...action.text },
  };
}
// ---------------------------------------
function _loaderWaitSwitch(state, action) {
  return {
    ...state,
    changedText: { ...state.changedText, isLoadinFinished: action.isFinished },
  };
}
// ---------------------------------------
function _editChangeStatus(state, action) {
  return {
    ...state,
    userData: { ...state.userData, quote: action.text },
  };
}
// ---------------------------------------
function _enableEditElement(state, action) {
  /*   state.userData.[action.elem] = 'zaebus'
  console.log(state.userData.picture)
  debugger */
  return {
    ...state,
    changedText: {
      ...state.changedText,
      isEditorOneNeed: true,
      whatEdit: action.elem,
    },
  };
}
// ---------------------------------------
function _disableEditElement(state, action) {
  /*   state.userData.[action.elem] = 'zaebus'
  console.log(state.userData.picture)
  debugger */
  return {
    ...state,
    changedText: {
      ...state.changedText,
      isEditorOneNeed: false,
      whatEdit: '',
    },
  };
}
// ---------------------------------------
function _editCurrElem(state, action) {
  return {
    ...state,
    userData: { ...state.userData, [state.changedText.whatEdit]: action.text },
  };
}
// ---------------------------------------
// ---------------------------------------
// ========================================

export const getUserByIdTC = (userID = 1) => {
  return (dispatch) => {
    dispatch(changeIsFinished(false));
    serverAL.getUserbyId(userID).then((data) => {
      dispatch(getUser(data));
      dispatch(changeIsFinished(true));
    });
  };
};
// ---------------------------------------
export const updateQuteServer = (id, whatEdit, text) => {


  return (dispatch) => {
    dispatch(changeIsFinished(false));
    serverAL.updateElement(id, whatEdit, text).then((data) => {
      // dispatch(getUser(data));
      dispatch(diesableEditElement())
      dispatch(changeIsFinished(true));
    });
  };
};

/* export const updateQuteServer = (id, text) => {

  
  return (dispatch) => {
    dispatch(changeIsFinished(false));
    serverAL.updateQuote(id, text).then((data) => {
      // dispatch(getUser(data));
      dispatch(changeIsFinished(true));
    });
  };
}; */
// ----
// ---------------------------------------
// ========================================
export default bodyReducer;
