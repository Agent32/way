import { serverAL } from '../api/api'
import { changeLoadStatus } from './actions/actionCommonReduser'

// ========================================

const SET_NEWS_POSTS = 'SET-NEWS-POSTS/newsPart'

type actionType = typeof SET_NEWS_POSTS
// ========================================


// --------------

const init = {
  newsList: [
    {
      owner: {
        id: 'load' as string | null,
        email: 'load' as string | null,
        title: 'load' as string | null,
        picture: 'load' as string,
        firstName: 'load' as string | null,
        lastName: 'load' as string | null
      },
      tags: ['load', 'ing'] as Array<string> | null,
      text: 'load' as string | null,
      image: 'href' as string,
      likes: 22 as number | null,
      link: 'href' as string | null,
      publishDate: '1020' as string | null
    }
  ]
}

export type initNewsType = typeof init
export type newsListType = typeof init.newsList
 
type actionCreatorType = {
  type: actionType
  data: newsListType
}

export const setNewsPosts = (data:newsListType): actionCreatorType => ({
  type: SET_NEWS_POSTS,
  data
})
// ========================================
function newsReducer(state = init, action: actionCreatorType): initNewsType {
  switch (action.type) {
    // --------------

    // --------------
    case SET_NEWS_POSTS: {
      return _setPosts(state, action)
    }

    // --------------
    default:
      return state
  }
}
// ========================================
//, owner: ...action.data.owner
// ---------------------------------------
function _setPosts(
  state: initNewsType,
  action: actionCreatorType
): initNewsType {
  return {
    ...state,
    newsList: [...action.data]
  }
}
// ---------------------------------------

// ========================================
export const getNewsPostsTC = () => async (dispatch: Function) => {
  try {
    dispatch(changeLoadStatus(true))
    const newsAnswData = await serverAL.getNewsList()
    dispatch(setNewsPosts(newsAnswData))
    dispatch(changeLoadStatus(false))
  } catch (err) {
    console.log(err)
  }
}
// ---------------------------------------

// ========================================
export default newsReducer
