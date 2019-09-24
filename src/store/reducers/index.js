import alert from './alert.reducers';
import auth from './auth.reducers';
import state from './state.reducers';
import profile from './profile.reducers';
import { combineReducers } from 'redux';

export default combineReducers({
    alert,
    auth,
    state,
    profile
})