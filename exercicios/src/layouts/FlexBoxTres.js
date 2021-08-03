import React from 'react';
import { View, StyleSheet } from 'react-native';
import { randomColor } from '../util/randomColor';
import Quadrado from './Quadrado';
const ESTILO = StyleSheet.create({
    Flex1: {
        borderColor: randomColor(),
        borderWidth: 2,
        borderRadius: 5,
        width: '100%',
        height: 350,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    Flex2: {
        flex: 1,
        flexDirection: 'row',
        borderColor: randomColor(),
        borderWidth: 3,
        alignItems:'baseline'
    }

});


const FlexBoxTres = props => {
    return (
        <View style={ESTILO.Flex1}>
            <View style={ESTILO.Flex2}>
                <Quadrado lado={20} />
                <Quadrado lado={30} />
                <Quadrado lado={40} />
                <Quadrado lado={50} />
                <Quadrado lado={60} />
                <Quadrado lado={70} />
            </View>
        </View>
    );
}

export default FlexBoxTres;