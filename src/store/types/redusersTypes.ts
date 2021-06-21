//----------------UserList------------------------
export type userType = {
  id: number|string
  firstName: string | null
  isFollow: boolean
  lastName: string | null
  email: string | null
  title: string | null
  picture: string
  quote: string | null
  adressCountry: string | null
  adressCity: string | null
  registerDate: string | null
  dateOfBirth?: string | null
  phone?: string | null
}
type pageSetType = {
  currentPage: number
  allUsersCount: number
  maxUsersAtPage: number
  isLoadinFinished: boolean
}

export type usersListStateType = {
  usersList: Array<userType>
  pageSettings: pageSetType
}

//----------------Profile------------------------

export type wallPostType = {
  id: number
  userId: number
  picture: string | null
  text: string | null
  createdAt: string | null
  likes: boolean
}
type profileSettingsType = {
  wallText: string | null
  isLoadinFinished: boolean
  whatEdit: keyof userType | null 
  isEditorOneNeed: boolean
}

export type profileMainType = {
  postsWall: Array<wallPostType>
  userData: userType
  profileSettings: profileSettingsType
}

//----------------PMlist------------------------

export type usersPmListType = {
  adressCity: string | null
  adressCountry: string | null
  email: string | null
  firstName: string | null
  id: number | null
  isFollow: boolean | null
  lastName: string | null
  phone: string | null
  picture: string 
  quote: string | null
  registerDate: string | null
  title: string | null
}

export type selectedDiadlogType = {
  userId: number | null
  text: string | null
  avatar: string 
  pmId: number | null
  firstName: string | null
}

type pmSettings = {
  isUserSelected: boolean
}

export type pmMainType = {
  usersPMlist: Array<usersPmListType>
  selectedDiadlog: Array<selectedDiadlogType>
  pmSettings: pmSettings
}

//----------------Autorization------------------------

export type loginData = {
  userName: string | null
  avatar: string | null
}

type userData = {
  inputLogin: string | null
  inputPassword: string | null
  isLoggedIn: boolean
  loginData: loginData
}

export type loginMainData = { userData: userData }
