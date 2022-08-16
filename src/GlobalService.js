import { AUTHORIZATION_TOKEN } from "./ActionService.js"
import { GET } from "./HeaderService.js"

export const getBodyAuthenticationToken = () => { return localStorage.getItem(AUTHORIZATION_TOKEN) ? localStorage.getItem(AUTHORIZATION_TOKEN) : []}
export const getTokenStorage = () => { return localStorage.getItem(AUTHORIZATION_TOKEN) ? JSON.parse(localStorage.getItem(AUTHORIZATION_TOKEN)).access_token : ''}
export const setLocalStorage = (name, value) => localStorage.setItem(name, value)
export const getLocalStorage = (name) => {return localStorage.getItem(name)}
export const AUTHORIZATION_ACESS_LOGIN = getLocalStorage(AUTHORIZATION_TOKEN) ? true : false

export function defaultSetReducer(type, payload){
    return {
        type: type,
        payload: payload
    }
}