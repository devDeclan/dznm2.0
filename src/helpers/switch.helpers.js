import { authConstants } from 'store/constants';

export default function(route){
    switch (route) {
        case authConstants.ADMIN_ROLE:
            return '/admin';
        case authConstants.CLIENT_ROLE:
            return '/dashboard/index';
        case authConstants.PROVIDER_ROLE:
            return '/cp';
        default:
            break;
    }
}