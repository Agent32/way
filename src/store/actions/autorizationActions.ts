import { loginData, loginMainData } from "../types/redusersTypes"


export const tryLogin = (data: loginData) => ({ type: 'TRY-LOGIN', data } as const)
// --------------
export const loginFormSubmit = (elem:loginData) => ({ type: 'LOGIN-FORM-SUBMIT', elem } as const )
// --------------
export const tryLogout = () => ({ type: 'TRY-LOGOUT' } as const)

