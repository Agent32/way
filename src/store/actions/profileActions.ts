import { userType } from '../types/redusersTypes'

export const getUser = (userProfiledata: userType) =>
  ({
    type: 'GET-USER/profile',
    userProfiledata
  } as const)

// --------------
export const changeIsFinished = (isFinished: boolean) =>
  ({
    type: 'LODAER-WAITER-CHANGER/profile',
    isFinished: isFinished
  } as const)
// --------------
export const editQuote = (text: string) => ({
  type: 'EDIT-QUOTE-TEXT/profile',
  text
} as const)
// --------------
export const enableEditElement = (elem: any) =>
  ({
    type: 'ENABLE_EDIT_ELEMENT/profile',
    elem
  } as const)
// --------------
export const diesableEditElement = () =>
  ({
    type: 'DISABLE_EDIT_ELEMENT/profile'
  } as const)
// --------------
export const editProfilePart = (text: string) =>
  ({
    type: 'EDIT-CURR-ELEM/profile',
    text
  } as const)
// --------------
export const getUserWallPost = (data: any) =>
  ({
    type: 'GET-USER-WALL/profile',
    data
  } as const)
// --------------
export const likeChange = (userid: number, postId: number) =>
  ({
    type: 'WALL-LIKE-BUTTON-CHANGE/profile',
    userid,
    postId
  } as const)
