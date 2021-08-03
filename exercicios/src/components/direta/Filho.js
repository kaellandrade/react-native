import React from 'react';
import {Text} from 'react-native';

const Filho = props => {
    return (
        <Text>{props.nome} {props.sobrenome}</Text>
    );
}

export default Filho;