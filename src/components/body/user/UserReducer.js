import { DELETE_USER, GET_USER, POST_USER, UPDATE_USER } from './UserAction.js';

const INIT_STATE = { users: [] };

export const userReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case POST_USER:
            if (action.payload && action.payload.error) {
                return {
                    ...state,
                    error: action.payload && action.payload.error
                };
            }
        case GET_USER:
            if (action.payload && action.payload.error) {
                return {
                    ...state,
                    error: action.payload && action.payload.error
                };
            } else if(action.payload.length >= 0) {
                return {
                    ...state,
                    users: action.payload
                };
            }
        case UPDATE_USER:
            if (action.payload && action.payload.error) {
                return {
                    ...state,
                    error: action.payload && action.payload.error
                };
            }
        case DELETE_USER:
            if (action.payload && action.payload.error) {
                return {
                    ...state,
                    error: action.payload && action.payload.error
                };
            }
        default: return state;
    }
}