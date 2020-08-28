import {authAPI} from '../api/api';
import {stopSubmit} from 'redux-form';

const INITILIAZED_SUCCESS = 'INITILIAZED_SUCCESS';

let initialState = {
    initializded: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITILIAZED_SUCCESS:
            return {
                ...state,
                initialized: true
            };

        default:
            return state;
    }
};

export const initializedSuccess = () => ({
    type: INITILIAZED_SUCCESS
});

export const initialize = () => (dispatch) => {};

export default appReducer;
