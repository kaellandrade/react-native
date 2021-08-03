import React, { Fragment } from 'react';
import { Text } from 'react-native';
import Estilo from '../estilos';
import PRODUTOS from './produtos';

const ListaProdutos = props => {
    return (
        <Fragment>
            <Text style={Estilo.TextoM}> Lista Produtos</Text>
            {PRODUTOS.map((produto, index) => <Text key={index}>{`${produto.id}º, ${produto.nome} R$ ${produto.preco}`}</Text>)
            }
        </Fragment>
    );
}

export default ListaProdutos;