import { CLIENT_LIST } from '../actions/actionTypes';

const initItemsState = [
    { id: 1, desc: "bla bla", img: "image 1", name: "Gourmet 1", price: 570 },
    { id: 2, desc: "bla bla", img: "image 2", name: "Gourmet 2", price: 570 },
    { id: 3, desc: "bla bla", img: "image 3", name: "Gourmet 3", price: 570 }
];

const initVeganState = [
    { id: 1, desc: "bla bla", img: "image 1", name: "vegan food 1", price: 570 },
    { id: 2, desc: "bla bla", img: "image 2", name: "vegan food 2", price: 570 },
    { id: 3, desc: "bla bla", img: "image 3", name: "vegan food 3", price: 570 }
];

const initMenuState = [
    { name: 'Best Sellers', items: initItemsState },
    { name: 'Vegan', items: initVeganState }
];
const initMenuState2 = [
    { name: 'Best Sellers 2', items: initItemsState },
    { name: 'Vegan 2', items: initVeganState }
];
const initMenuState3 = [
    { name: 'Best Sellers 3', items: initItemsState },
    { name: 'Vegan 3', items: initVeganState }
];

const initialState = {
    clients: [
        { id: 1, name: 'iFood', menu: initMenuState },
        { id: 2, name: 'iQueFome', menu: initMenuState2 },
        { id: 3, name: 'iQueDor', menu: initMenuState3 }
    ]
};

/**
 * Aqui você deve disparar a aação de CLIENT_LIST para pegar o seu json de menus 
 */
export const clientReducer = (state = initialState, action) => {
    switch (action.type) {
        case CLIENT_LIST:
            return action.payload;
        default:
            return state;
    }
}