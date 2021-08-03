import React from 'react';
import { Text, StyleSheet } from 'react-native';
import Estilo from './estilos';
const CompMinMax = props => {
    const valores = (props.x > props.y) ? { maior: props.x, menor: props.y } : { maior: props.y, menor: props.x }
    return (
        <Text style={Estilo.TextoG}>
            O valor {valores.maior} é maior ou igual a {valores.menor}!
        </Text>
    )
}

export default CompMinMax;