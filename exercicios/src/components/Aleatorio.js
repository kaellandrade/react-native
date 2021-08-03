import React from 'react';
import { Text } from 'react-native';
import Estilo from './estilos';



const Aleatorio = props => {
    const {start, end} = props;
    const numRandom = Math.floor(Math.random() * (end - start)) + start + 1;
    return (
        <Text style={Estilo.TextoG}>
            Random Range[{start}, {end}] = {numRandom}
        </Text>
    );
}

export default Aleatorio;