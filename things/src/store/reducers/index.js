import { combineReducers } from 'redux';
import { clientReducer } from './reducer';

export const Reducers = combineReducers({
    clientState: clientReducer
});
