import { profileConstants } from 'store/constants';

export default function profile(state = {}, action) {
    switch (action.type) {
        case profileConstants.UPDATE:
            return action.profile;
        case profileConstants.REMOVE:
            return {};
        default:
            return state
    }
}