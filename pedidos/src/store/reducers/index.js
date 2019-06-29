import { combineReducers } from 'redux';
import { produtoReducer } from './reducers';

export const Reducers = combineReducers({
    produtoState: produtoReducer
});