import { 
    GET_PRODUTOS
} from '../actions/actionTypes';

const initialState = {
    produtos: [
        { id: 1, imagem: 'download.jpeg', descricao: 'Gato 1', valor: '400,00' },
        { id: 2, imagem: 'download.jpeg', descricao: 'Gato 2', valor: '400,00' },
        { id: 3, imagem: 'download.jpeg', descricao: 'Gato 3', valor: '400,00' },
        { id: 4, imagem: 'gatos.png', descricao: 'Gato 4', valor: '400,00' },
        { id: 5, imagem: 'gatos.png', descricao: 'Gato 5', valor: '400,00' },
        { id: 6, imagem: 'gatos.png', descricao: 'Gato 6', valor: '400,00' }
    ]
};

export const produtoReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUTOS:
            return state.produtos;
        default:
            return state;
    }
}