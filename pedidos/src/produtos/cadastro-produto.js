import React from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { salvarProdutoAction } from '../store/actions/index';

const CadastroProduto = (props) => {
    const [nome, setNome] = React.useState('');
    const [preco, setPreco] = React.useState('');

    const onChangeNome = event => setNome(event.target.value);
    const onChangePreco = event => setPreco(event.target.value);
    const { salvar } = props;

    return <div>
        <h1>Cadastrar</h1>
        <TextField
            required
            label="Nome"
            value={nome}
            helperText={nome === "" ? 'Preencher o nome do produto!' : ' '}
            variant="outlined"
            onChange={onChangeNome}
        />

        <TextField
            required
            label="Preço"
            type="number"
            value={preco}
            helperText={preco === "" ? 'Preencher o preço do produto!' : ' '}
            variant="outlined"
            onChange={onChangePreco}
        />
        <Button variant="contained" color="primary" onClick={() => salvar({ nome, preco })}>
            SALVAR
        </Button>
    </div>
}

const mapDispatchToProps = dispatch => ({
    salvar: value => dispatch(salvarProdutoAction(value))
})

export default connect(null, mapDispatchToProps)(CadastroProduto);