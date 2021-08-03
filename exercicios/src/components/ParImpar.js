import React from 'react';
import { Text, View } from 'react-native';
import Estilo from './estilos';

const Condicional = ({ num = 0 }) => {
    return (
        <View>
            <Text>O reultado é:</Text>
            <Text style={Estilo.TextoG}>{num % 2 === 0 ? 'Par' : 'Ímpar'}</Text>
        </View>
    );
}

export default Condicional;