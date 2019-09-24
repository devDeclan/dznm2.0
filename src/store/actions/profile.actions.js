import { profileConstants } from 'store/constants';
import { profileService } from 'store/services';
//import { stateActions } from 'store/actions';

export default {
    updateProfile,
    getProfile,
    removeProfile
};

function updateProfile(uid) {
}

function getProfile(uid) {
    return dispatch => {

        profileService.getProfile(uid)
            .then(
                (profile) => {
                    profile=profile.data();
                    dispatch(success(profile));
                },
                (error) => {
                    console.log("error");
                }
            );
    };
    function success(profile) { return { type: profileConstants.UPDATE, profile } }
}

function removeProfile() {
    return { type: profileConstants.REMOVE };
}