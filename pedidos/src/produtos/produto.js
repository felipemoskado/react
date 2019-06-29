import React from 'react';
import { connect } from 'react-redux';

import './lista-produtos.js';

const Produto = (props) => {
    const { produtos } = props;
    
    return <div className="container-horizontal lista-produtos">
        {produtos.map(produto => (
            <div key={produto.id} className="flex container-vertical">
                <img src={require(`../images/${produto.imagem}`)} height="200" width="100%"></img>
                <span>{produto.descricao}</span>
                <span>R$ {produto.valor}</span>
            </div>
        ))}
    </div>
}

const mapStateToProps = store => ({
    produtos: store.produtoState.produtos
});

export default connect(mapStateToProps)(Produto);