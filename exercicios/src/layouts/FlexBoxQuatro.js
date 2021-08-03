import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { randomColor } from '../util/randomColor';
import Quadrado from './Quadrado';
const ESTILO = StyleSheet.create({
    Flex4: {
        backgroundColor: randomColor(),
        width: 100,
        flexGrow: 1
    },
    V1: {
        backgroundColor: randomColor(),
        flexGrow:50
    },
    V2: {
        backgroundColor: randomColor(),
        flexGrow:10


    }
});


const FlexBoxQuatro = props => {
    return (
        <View style={ESTILO.Flex4}>
            <View style={ESTILO.V1} />
            <View style={ESTILO.V2} />
        </View>
    );
}

export default FlexBoxQuatro;