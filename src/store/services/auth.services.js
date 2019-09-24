import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';
import { authConstants } from 'store/constants';

export default {
    login,
    loginGoogle,
    logout,
    register,
    getProfile,
    setProfile,
    sendResetCode,
    resetPassword
};

function login(email, password) {
    return firebase.auth().signInWithEmailAndPassword(email, password)
}

function logout() {
    return firebase.auth().signOut()
}

function register(email, password) {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
}

function getProfile(user) {
    return firebase.firestore().collection("users").doc(user.uid).get()
}

function setProfile(user, role=authConstants.CLIENT_ROLE) {
    let {providerData} = user;
    return firebase.firestore().collection("users").doc(user.uid).set({role,...providerData[0]},{merge: true})
}

function sendResetCode(email) {
    return firebase.auth().sendPasswordResetEmail(email)
}

function resetPassword(password, token) {
    return firebase.auth().confirmPasswordReset(token, password)
}

function loginGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(provider)
}