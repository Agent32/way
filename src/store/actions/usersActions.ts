import { userType } from '../types/redusersTypes'

export const userFollowChange = (id: number) => ({
  type: 'CHANGE-FOLLOW/users',
  id
}as const)
// --------------
export const updateUserChange = (data: Array<userType>) => ({
  type: 'GET-MORE-USERS/users',
  data
} as const)
// --------------
export const changeCurPage = (id: number) => ({
  type: 'CHANGE-CURRENT-PAGE/users',
  id
} as const)
// --------------
export const changeIsFinished = (isFinished: boolean) => ({
  type: 'LODAER-WAITER-CHANGER/users',
  isFinished
} as const)
// --------------
export const getMaxUsers = (count: number) => ({
  type: 'GET-MAX-USERS/users',
  count
} as const)
