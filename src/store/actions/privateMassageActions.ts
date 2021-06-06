import { usersPmListType, selectedDiadlogType } from '../types/redusersTypes'

export const setUsersListPM = (data: Array<usersPmListType>) =>
  ({
    type: 'SET-USERS-LIST-PM/message-part',
    data
  } as const)
export const setCuttentDialog = (data: Array<selectedDiadlogType>) =>
  ({
    type: 'SET-CURRENT-DIEALOGS-PM/message-part',
    data
  } as const)

export const addSendPm = (data: selectedDiadlogType) =>
  ({
    type: 'ADD-NEW-PM/message-part',
    data
  } as const)
