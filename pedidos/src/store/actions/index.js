import {
    GET_PRODUTOS,
    SALVAR_PRODUTO
} from './actionTypes';

export const getProdutosAction = () => ({ type: GET_PRODUTOS });
export const salvarProdutoAction = (payload) => ({ type: SALVAR_PRODUTO, payload });