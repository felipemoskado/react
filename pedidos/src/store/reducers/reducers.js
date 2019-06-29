import { SAVE_INPUT_VALUE, CLEAR_INPUT_VALUE, UPDATE_INPUT_VALUE } from '../actions/actionTypes';

const initialState = {
    values: [
        {
            firstName: 'Felipe',
            lastName: 'Moskado',
            telephone: '43 9 1111-1111',
            cpf: '111111111',
            rg: '222222222'
        }
    ]
};

export const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_INPUT_VALUE:
            return {
                ...state,
                values: addValue(action.payload, state.values)
            };
        case UPDATE_INPUT_VALUE:
            return {
                ...state,
                values: addValue(action.payload, state.values)
            }
        case CLEAR_INPUT_VALUE:
            return {
                ...state,
                information: ''
            };
        default:
            return state;
    }
}

const addValue = (value, values) => {
    values.push(value)
    return [...values];
}