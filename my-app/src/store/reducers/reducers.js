import { SAVE_INPUT_VALUE, CLEAR_INPUT_VALUE } from '../actions/actionTypes';

const initialState = {
    information: {},
    values: []
};

export const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_INPUT_VALUE:
            return {
                ...state,
                information: action.payload
            };
        case CLEAR_INPUT_VALUE:
            return {
                ...state,
                information: ''
            };
        default:
            return state;
    }
}