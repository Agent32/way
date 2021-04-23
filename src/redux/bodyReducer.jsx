// ========================================
const WALL_POST_PUBLISH = "WALL-POST-PUBLISH";
const TEXTAREA_EDIT_WALL = "TEXTAREA-EDIT-WALL";
// ========================================
export const wallPostActionCreator = () => ({ type: WALL_POST_PUBLISH });
export const textEditWallActionCreator = (text) => ({
  type: TEXTAREA_EDIT_WALL,
  text: text,
});
// ========================================
//state= this._state.bodyPart

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
  changedText: {
    wallText: "",
    PMtext: "",
  },
  // ---------------------------------------
  dataMass: [
    "https://www.vokrug.tv/pic/person/2/b/f/4/2bf448098b7badf3b37e87c510da29bc.jpeg",
    "Anon",
    "2 jan",
    "Minsk",
    "HNAGH-11",
    "https://learn.javascript",
  ],
}
// ========================================

function bodyReducer(state=init, action) {
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
    default:
      return state;
  }
}
// ========================================

// ---------------------------------------
function _textAreaEditWall(state, action) {
  state.changedText.wallText = action.text;
  return state;
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
  state.postsWall.push(curr);
  state.changedText.wallText = "";
  return state;
}
// ---------------------------------------

export default bodyReducer;
