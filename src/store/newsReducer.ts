import { serverAL } from "../api/api";
import { changeLoadStatus } from "./commonReduser";

// ========================================


const SET_NEWS_POSTS = "SET-NEWS-POSTS/newsPart";

type actionType = typeof SET_NEWS_POSTS
// ========================================

type actionCreatorType = {
  type: actionType,
  data: any
}



export const setNewsPosts = (data: actionCreatorType) => ({
  type: SET_NEWS_POSTS,
  data,
});
// --------------

type initNewsType =
  {
    newsList: [
      {
        owner: {
          id: string,
          email: string,
          title: string,
          picture: string,
          firstName: string,
          lastName: string,
        },
        tags: Array<string>,
        text: string,
        image: string,
        likes: number,
        link: string,
        publishDate: string,
      },
    ],
  }

const init: initNewsType = {
  newsList: [
    {
      owner: {
        id: "load",
        email: "load",
        title: "load",
        picture: "load",
        firstName: "load",
        lastName: "load",
      },
      tags: ['load', 'ing'],
      text: "load",
      image: "href",
      likes: 22,
      link: "href",
      publishDate: "1020",
    },
  ],
};
// ========================================
function newsReducer(state = init, action: actionCreatorType) {
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
function _setPosts(state: initNewsType, action: actionCreatorType) {
  return {
    ...state,
    newsList: [...action.data],
  };
}
// ---------------------------------------

// ========================================
export const getNewsPostsTC = () => async (dispatch: Function) => {
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
