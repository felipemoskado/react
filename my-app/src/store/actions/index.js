import { SAVE_INPUT_VALUE, CLEAR_INPUT_VALUE } from './actionTypes';

export const saveInputValue = value => ({
    type: SAVE_INPUT_VALUE,
    payload: value
});

export const clearInputValue = () => ({
    type: CLEAR_INPUT_VALUE
});