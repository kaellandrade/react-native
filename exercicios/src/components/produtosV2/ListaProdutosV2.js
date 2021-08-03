import React, { Fragment } from 'react';
import { Text, FlatList } from 'react-native';
import Estilo from '../estilos';
import PRODUTOS from './produtos';

const currency = valor => {
    let num = !String(valor).includes('.') ? `${valor}.00` : String(valor);
    return `R$ ${num.replace('.', ',')}`
}

const render = ({ item }) => {
    let { id, nome, preco } = item;
    return <Text>{`${id}) ${nome} -> ${currency(preco)}`}</Text>
}


const ListaProdutosV2 = props => {
    return (
        <Fragment>
            <Text style={Estilo.TextoM}> Lista Produtos V2</Text>
            <FlatList
                keyExtractor={i => `${i.id}`}
                data={PRODUTOS}
                renderItem={render}
            />
        </Fragment>
    );
}

export default ListaProdutosV2;