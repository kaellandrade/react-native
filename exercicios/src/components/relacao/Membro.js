import React from 'react';
import { Text } from 'react-native';
import Estilo from '../estilos';

const Membro = props => {
    return (
        <Text style={Estilo.TextoM}>{props.nome} {props.sobrenome}</Text>
    );
}

export default Membro;