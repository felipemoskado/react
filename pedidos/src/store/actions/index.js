import { SAVE_INPUT_VALUE, CLEAR_INPUT_VALUE } from './actionTypes';

export const saveInputValue = payload => ({
    type: SAVE_INPUT_VALUE,
    payload
});

export const clearInputValue = () => ({
    type: CLEAR_INPUT_VALUE
});