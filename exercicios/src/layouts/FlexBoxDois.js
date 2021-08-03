import React from 'react';
import { View, StyleSheet } from 'react-native';
import { randomColor } from '../util/randomColor';
import Quadrado from './Quadrado';
const ESTILO = StyleSheet.create({
    Flex1: {
        backgroundColor: randomColor(),
        width: '100%',
        height: '100%',
        flexDirection:'row',
        flexWrap:'wrap'
    },

});


const FlexBoxDois = props => {
    return (
        <View style={ESTILO.Flex1}>
            <Quadrado codeColor/>
            <Quadrado codeColor/>
            <Quadrado codeColor/>
            <Quadrado codeColor/>
            <Quadrado codeColor/>
            <Quadrado codeColor/>
            <Quadrado codeColor/>
            <Quadrado codeColor/>
            <Quadrado codeColor/>
            <Quadrado codeColor/>
            <Quadrado codeColor/>
            <Quadrado codeColor/>
            <Quadrado codeColor/>
            <Quadrado codeColor/>
            <Quadrado codeColor/>
            <Quadrado codeColor/>
            <Quadrado codeColor/>
            <Quadrado codeColor/>
            <Quadrado codeColor/>
            <Quadrado codeColor/>
            <Quadrado codeColor/>
            <Quadrado codeColor/>
            <Quadrado codeColor/>
            <Quadrado codeColor/>
            <Quadrado codeColor/>
            <Quadrado codeColor/>
            <Quadrado codeColor/>
            <Quadrado codeColor/>
            <Quadrado codeColor/>
            <Quadrado codeColor/>
            <Quadrado codeColor/>
            <Quadrado codeColor/>
        </View>
    );
}

export default FlexBoxDois;