import firebase from 'firebase';
import 'firebase/firestore';
import { authConstants } from 'store/constants';

export default {
    getProfile,
    setProfile,
};

function getProfile(uid) {
    return firebase.firestore().collection("users").doc(uid).get()
}

function setProfile(uid, role = authConstants.CLIENT, profile) {
    return firebase.firestore().collection("users").doc(uid).set({role, ...profile},{merge: true})
}
