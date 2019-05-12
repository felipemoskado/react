import { SAVE_INPUT_VALUE, CLEAR_INPUT_VALUE } from '../actions/actionTypes';

const initialState = {
    inputValue: ''
  };

export const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_INPUT_VALUE:
            return {
                ...state,
                inputValue: action.payload
            };
        case CLEAR_INPUT_VALUE:
            return {
                ...state,
                inputValue: ''
            };
        default:
            return state;
    }
}