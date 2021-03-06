import {
    USER_LOGIN,
    USER_REGISTER,
    USER_GET,
    USER_LOGOUT} from '../actions/index';

export default function(state = {}, action = '') {
    switch(action.type) {
        case(USER_GET):
            if (action.payload.status === 200)
            {
                return Object.assign({}, state, action.payload.data );
            } else {
                return state;
            }
            break;
        case(USER_LOGIN):
            return Object.assign({}, state, action.payload.data);
        case(USER_REGISTER):
            return Object.assign({}, state, action.payload.data );
        case(USER_LOGOUT):
            return {};
        default:
            return state;
    }
}
