import { URL_APP } from "../../../environment"
import { DELETE, GET, POST, PUT } from "../../../HeaderService";
import { DELETE_USER, GET_USER, POST_USER, UPDATE_USER } from "./UserAction"


export function getAll() {
    console.log(`${URL_APP}/users/`)
    let request = fetch(`${URL_APP}/v1/users`, GET()).then(res => {
        return res.clone().json()
    });
    return { type: GET_USER, payload: request };
}

export function createUser(event) {
    let request = fetch(`${URL_APP}/users/`, POST(event)).then(res => {
        if(!res.ok) { throw res.clone().json().then(error => {
            return {
                type: POST_USER,
                error: error
            }
        })}
        return res.clone().json()
    });
    getAll()
    return { type: POST_USER, payload: request };
}

export function updateUser(event) {
    let request = fetch(`${URL_APP}/v1/users/`, PUT(event)).then(res => {
        if(!res.ok) { throw res.clone().json().then(error => {
            return {
                type: UPDATE_USER,
                error: error
            }
        })}
        return res.clone().json()
    });
    getAll()
    return { type: UPDATE_USER, payload: request }; 
}

export function deleteUser(event) {
    let request = fetch(`${URL_APP}/v1/users/${event.id}`, DELETE()).then(res => {
        if(!res.ok) { throw res.clone().json().then(error => {
            return {
                type: DELETE_USER,
                error: error
            }
        })}
        return null
    });
    getAll()
    return { type: DELETE_USER, payload: request };
}