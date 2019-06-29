import React from 'react';

import './lista-produtos.js';

const Produto = () =>
    <div className="container-horizontal lista-produtos">
        <div className="flex container-vertical">
            <img src={require("../images/download.jpeg")} height="200" width="100%"></img>
            <span>Hello World</span>
            <span>R$ 400,00</span>
        </div>
        <div className="flex container-vertical">
            <img src={require("../images/download.jpeg")} height="200" width="100%"></img>
            <span>Hello World</span>
            <span>R$ 400,00</span>
        </div>
        <div className="flex container-vertical">
            <img src={require("../images/download.jpeg")} height="200" width="100%"></img>
            <span>Hello World</span>
            <span>R$ 400,00</span>
        </div>
        <div className="flex container-vertical">
            <img src={require("../images/gatos.png")} height="200" width="100%"></img>
            <span>Hello World</span>
            <span>R$ 400,00</span>
        </div>
        <div className="flex container-vertical">
            <img src={require("../images/gatos.png")} height="200" width="100%"></img>
            <span>Hello World</span>
            <span>R$ 400,00</span>
        </div>
        <div className="flex container-vertical">
            <img src={require("../images/gatos.png")} height="200" width="100%"></img>
            <span>Hello World</span>
            <span>R$ 400,00</span>
        </div>
    </div>

export default Produto;