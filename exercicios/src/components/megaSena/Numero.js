import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Estilos from '../estilos';
import { randomColor } from '../../util/randomColor'

const Estilo = StyleSheet.create({
    ball: {
        width: 60,
        height: 60,
        borderWidth: 2,
        borderRadius: 100,
    }
});

const Numero = props => {
    return (
        <View style={[{ backgroundColor: randomColor() }, Estilo.ball]}>
            <Text style={Estilos.TextoM}>
                {String(props.numero).padStart(2, '0')}
            </Text>
        </View>
    );
}

export default Numero;