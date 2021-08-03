import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { randomColor } from '../util/randomColor';

const Quadrado = props => {
    const LADO = props.lado || 90;

    const ESTILO = StyleSheet.create({
        box: {
            height: LADO,
            width: LADO,
            backgroundColor: randomColor(),
            borderWidth: 2,
            borderColor: 'black'
        },
        font: {
            fontSize: 24,
        }
    })
    return (
        <View style={ESTILO.box}>
            {(props.codeColor) ? <Text style={ESTILO.font}>{`${ESTILO.box.backgroundColor}`.toUpperCase()}</Text> : null}
        </View>
    );
}

export default Quadrado;