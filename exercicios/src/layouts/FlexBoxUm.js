import React from 'react';
import { View, StyleSheet } from 'react-native';
import Quadrado from './Quadrado';
const ESTILO = StyleSheet.create({
    Flex1: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: 'black'
    },

});


const FlexBoxUm = props => {
    return (
        <View style={ESTILO.Flex1}>
            <Quadrado />
            <Quadrado />
            <Quadrado />
            <Quadrado />
            <Quadrado />
        </View>
    );
}

export default FlexBoxUm;