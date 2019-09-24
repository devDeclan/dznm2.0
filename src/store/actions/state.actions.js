import { stateConstants } from 'store/constants';

export default {
    running,
    idle
};

function running() {
    return { type: stateConstants.RUNNING };
}

function idle() {
    return { type: stateConstants.IDLE };
}