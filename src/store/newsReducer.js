import { serverAL } from "../api/api";
import { changeLoadStatus } from "./commonReduser";

// ========================================

const SET_NEWS_POSTS = "SET-NEWS-POSTS/newsPart";

// ========================================

// --------------
export const setNewsPosts = (data) => ({
  type: SET_NEWS_POSTS,
  data,
});
// --------------

const init = {
  newsList: [
    {
      owner: {
        id: "",
        email: "",
        title: "",
        picture: "",
        firstName: "",
        lastName: "",
      },
      tags: [],
      text: "",
      image: "",
      likes: "",
      link: "",
      tags: "",
      publishDate: "",
    },
  ],
};
// ========================================
function newsReducer(state = init, action) {
  switch (action.type) {
    // --------------

    // --------------
    case SET_NEWS_POSTS: {
      return _setPosts(state, action);
    }

    // --------------
    default:
      return state;
  }
}
// ========================================
//, owner: ...action.data.owner
// ---------------------------------------
function _setPosts(state, action) {
  return {
    ...state,
    newsList: [...action.data],
  };
}
// ---------------------------------------

// ========================================
export const getNewsPostsTC = () => async (dispatch) => {
  try {
    dispatch(changeLoadStatus(true));
    const newsAnswData = await serverAL.getNewsList();
    dispatch(setNewsPosts(newsAnswData.data));
    dispatch(changeLoadStatus(false));
  } catch (err) {
    console.log(err);
  }
};
// ---------------------------------------

// ========================================
export default newsReducer;
