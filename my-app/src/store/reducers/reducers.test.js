import { formReducer } from './reducers';
import { saveInputValue, clearInputValue } from '../actions/index';

const INITIAL_STATE = {
    information: {},
    values: [
        {
            firstName: 'Felipe',
            lastName: 'Moskado',
            telephone: '43 9 1111-1111',
            cpf: '111111111',
            rg: '222222222'
        }
    ]
}

describe('Reducers', () => {
    describe('formReducer', () => {
        it('Should keep the state when receive an action not mapped', () => {
            const unknowAction = { type: 'ACTION_VERY_CRAZY', payload: null };
            const state = formReducer(INITIAL_STATE, unknowAction);

            expect(state.information).toEqual(INITIAL_STATE.information);
            expect(state.values.length).toEqual(1);
            expect(state.values).toEqual(INITIAL_STATE.values);
        });

        it('Should alter the state when receive the action clearInputValue', () => {
            const state = formReducer(INITIAL_STATE, clearInputValue());
            console.log(state.values)
            expect(state.information).toEqual('');
            expect(state.values.length).toEqual(1);
            expect(state.values).toEqual(INITIAL_STATE.values);
        });

        it('Should alter the state when receive the action saveInputValue', () => {
            const payload = {
                firstName: 'Fulano',
                lastName: 'Legal',
                telephone: '123456789',
                cpf: '1234568900',
                rg: '12345689'
            };

            const state = formReducer(INITIAL_STATE, saveInputValue(payload));

            expect(state.information).toEqual(payload);
            expect(state.values.length).toEqual(2);
            expect(state.values[1].firstName).toEqual('Fulano');
            expect(state.values[1].lastName).toEqual('Legal');
            expect(state.values[1].telephone).toEqual('123456789');
            expect(state.values[1].cpf).toEqual('1234568900');
            expect(state.values[1].rg).toEqual('12345689');
        });
    });
});