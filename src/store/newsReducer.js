import { serverAL } from "../api/api";

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
      owner:{
        id: '', email: '', title: '', picture: '', firstName: '', lastName: '',
      },
      tags: [],
      text: "",
      image: "",
      likes: "",
      link: "",
      tags: "",
      publishDate: "",
      owner: {},
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
    // dispatch(changeIsFinished(false));
    const newsAnswData = await serverAL.getNewsList();

    dispatch(setNewsPosts(newsAnswData.data));

    //dispatch(changeIsFinished(true));
  } catch (err) {
    console.log(err);
  }
};
// ---------------------------------------

// ========================================
export default newsReducer;
