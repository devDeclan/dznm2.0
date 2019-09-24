import { authConstants } from 'store/constants';
import { authService } from 'store/services';
import { alertActions, stateActions } from 'store/actions';
import { history } from 'App';
import SweetAlert from 'sweetalert2';
import profileActions from './profile.actions';

export default {
    login,
    logout,
    register,
    sendReset,
    resetPassword,
    loginGoogle
};

function login(email, password) {
    return dispatch => {
        dispatch(stateActions.running());

        authService.login(email, password)
            .then(
                ({user: {uid}}) => {
                    dispatch(success(uid));
                    dispatch(profileActions.getProfile(uid));
                    history.push('/dashboard');
                    dispatch(alertActions.success("Login successful"))
                    dispatch(stateActions.idle());
                },
                (error) => {
                    dispatch(failure());
                    dispatch(alertActions.error("Login unsuccessful"))
                    dispatch(stateActions.idle());
                }
            );
    };
    function success(uid) { return { type: authConstants.LOGIN, uid } }
    function failure() { return { type: authConstants.LOGOUT } }
}

function loginGoogle() {
    return dispatch => {
        dispatch(stateActions.running());

        authService.loginGoogle()
            .then(
                ({user: {uid}}) => {
                    dispatch(success(uid));
                    dispatch(profileActions.getProfile(uid));
                    history.push('/dashboard');
                    dispatch(alertActions.success("Login successful"))
                    dispatch(stateActions.idle());
                },
                (error) => {
                    dispatch(failure());
                    dispatch(alertActions.error("Login unsuccessful"))
                    dispatch(stateActions.idle());
                }
            )
    };

    function success(uid) { return { type: authConstants.LOGIN, uid } }
    function failure() { return { type: authConstants.LOGOUT } }
}

function logout(next) {
    return dispatch => {
        SweetAlert.fire({
            title: 'Are you sure?',
            text: "You are already logged in. Do you want to logout?",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, logout!'
        }).then((result) => {
            if (result.value) {
                authService.logout();
                dispatch(success());
                dispatch(profileActions.removeProfile())
                dispatch(alertActions.success("Logged out"))
                history.push('/auth');
            }else{
                history.push(next);
                dispatch(alertActions.success("Logout cancelled"))
            }
        })
    }
    function success() { return { type: authConstants.LOGOUT } }
}

function register(email, password, next) {
    return dispatch => {
        dispatch(stateActions.running());

        authService.register(email, password)
            .then(
                ({user: {uid}}) => {
                    dispatch(success(uid));
                    dispatch(profileActions.getProfile(uid));
                    history.push('/dashboard');
                    dispatch(alertActions.success("Registration successful"))
                    dispatch(stateActions.idle());   
                },
                (error) => {
                    dispatch(failure());
                    dispatch(alertActions.error("Registration unsuccessful"))
                    dispatch(stateActions.idle());
                }
            );
    };

    function success(uid) { return { type: authConstants.LOGIN, uid } }
    function failure() { return { type: authConstants.LOGOUT } }
}

function sendReset(email) {
    return dispatch => {
        dispatch(stateActions.running());

        authService.sendResetCode(email)
            .then(
                ()=>{
                    dispatch(alertActions.success("Reset email sent"))
                    dispatch(stateActions.idle());
                },
                (error)=>{
                    dispatch(alertActions.error("Reset email not sent"));
                    dispatch(stateActions.idle());
                }
            );
    };
}

function resetPassword(password, token) {
    return dispatch => {
        dispatch(stateActions.running());

        authService.resetPassword(password, token)
            .then(
                ()=>{
                    history.push('/auth/login');
                    dispatch(alertActions.success("Password reset successful"));
                    dispatch(stateActions.idle());
                },
                (error)=>{
                    dispatch(alertActions.error("Password reset unsuccessful"));
                    dispatch(stateActions.idle());
                }
            )
    }
}