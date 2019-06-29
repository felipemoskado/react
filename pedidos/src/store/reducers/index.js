import { formReducer } from './reducers';
import { combineReducers } from 'redux';

export const Reducers = combineReducers({
    formState: formReducer
});