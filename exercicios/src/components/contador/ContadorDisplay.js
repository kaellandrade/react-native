import React from 'react';
import { Text, View } from 'react-native';
import Estilo from '../estilos';

const Comp = props => {
    return (
        <View style={Estilo.Display}>
            <Text style={Estilo.TextoG}>
                {props.num}
            </Text>
        </View>
    );
}

export default Comp;