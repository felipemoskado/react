import { 
    SALVAR_PRODUTO
} from '../actions/actionTypes';

const initialState = {
    produtos: [
        { id: 1, imagem: 'download.jpeg', nome: 'Gato 1', preco: '400,00' },
        { id: 2, imagem: 'download.jpeg', nome: 'Gato 2', preco: '400,00' },
        { id: 3, imagem: 'download.jpeg', nome: 'Gato 3', preco: '400,00' },
        { id: 4, imagem: 'gatos.png', nome: 'Gato 4', preco: '400,00' },
        { id: 5, imagem: 'gatos.png', nome: 'Gato 5', preco: '400,00' },
        { id: 6, imagem: 'gatos.png', nome: 'Gato 6', preco: '400,00' }
    ]
};

export const produtoReducer = (state = initialState, action) => {
    switch (action.type) {
        case SALVAR_PRODUTO:
            const newState = { ...state, produtos: adicionarProduto(action.payload, state.produtos) }      
            console.log('newState: ', newState);
            return newState;
        default:
            return state;
    }
}

const adicionarProduto = (produto, produtos) => {
    produtos.push({
        ...produto,
        id: produtos.length - 1,
        imagem: 'gato02.jpg'
    });

    return [...produtos];
}