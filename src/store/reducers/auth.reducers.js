import { authConstants } from 'store/constants';

const initialState = {
    loggedIn: false,
    uid: null
};

export default function auth(state = initialState, action) {
    switch (action.type) {
        case authConstants.LOGIN:
            return {
                loggedIn: true,
                uid: action.uid
            };
        case authConstants.LOGOUT:
            return {
                loggedIn: false,
                uid: null
            };
        default:
            return state
    }
}