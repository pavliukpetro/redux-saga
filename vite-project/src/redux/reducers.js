import {
    FETCH_USERS_FAILURE,
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
} from './actions';

const initialState = {
    users: [],
    error: '',
    loading: false,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_USERS_SUCCESS:
            return {
                users: action.payload,
                error: '',
                loading: false,
            };
        case FETCH_USERS_FAILURE:
            return {
                error: action.payload,
                users: [],
                loading: false,
            };
        default:
            return state;
    }
};

export default userReducer;
