import {
    SET_OVERLAY,
    GET_CONTENT,
    SET_CONTENT,
    SET_CURRENT_VIEW,
    SYNC_DATA
} from '../actions/index';

export default function(state = {}, action = '') {

    switch(action.type) {
        case(GET_CONTENT):
            return Object.assign({}, state, {content: action.payload});
            break;
        case(SET_CONTENT):
            return Object.assign({}, state, {content: action.payload});
            break;
        case(SET_CURRENT_VIEW):
            return Object.assign({}, state, {currentView: action.payload});
            break;
        case(SYNC_DATA):
            return Object.assign({}, state, {dataSynced: action.payload.data});
            break;
        default:
            return state;
    }
}
