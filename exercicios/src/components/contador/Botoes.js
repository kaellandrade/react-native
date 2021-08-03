import React from 'react';
import { Button, View, Alert } from 'react-native';
import Estilo from '../estilos';

const Comp = props => {
    return (
        <View style={Estilo.Flex}>
            <Button color='green' title='+' onPress={props.inc} />
            <Button  color='red' title='-' onPress={props.dec} />
        </View>
    );
}

export default Comp;