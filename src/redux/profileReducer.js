//import { cloneDeep } from "lodash";
// ========================================
const WALL_POST_PUBLISH = "WALL-POST-PUBLISH";
const TEXTAREA_EDIT_WALL = "TEXTAREA-EDIT-WALL";
const GET_USER = "GET-USER";
const LODAER_WAITER_CHANGER = "LODAER-WAITER-CHANGER";
// ========================================
export const wallPostSend = () => ({ type: WALL_POST_PUBLISH });
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
  },
  // ---------------------------------------
  userData: {
    id: "loading",
    title: `loading`,
    firstName: `loading`,
    lastName: `loading`,
    gender: `loading`,
    email: `loading`,
    dateOfBirth: `loading`,
    registerDate: `loading`,
    phone: `loading`,
    picture: ``,
    location: {
      state: `loading`,
      street: `loading`,
      country: `loading`,
      timezone: `loading`,
      city: `loading`,
    },
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
    text: state.changedText.wallText,
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

export default bodyReducer;
