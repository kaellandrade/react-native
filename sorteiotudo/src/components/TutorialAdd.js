import { Center } from 'native-base';
import React from 'react';
import { Text, View, StyleSheet, ImageBackground, Image } from 'react-native';
import { ESTILOS_COMUNS } from '../styles/estilosComuns';
import { borderDebug } from '../util/functionsDebugs';
import boxGifit from '../../assets/img/giftBox.png'
import { height } from 'styled-system';

const TutorialAdd = props => {
    return (
        <View style={estilos.container}>
            <View style={estilos.boxDesenho}>
                <Text style={estilos.textoDica}>
                    Adicine seus amigos!
                </Text>
            </View>
            <ImageBackground style={estilos.backGround} source={boxGifit} />
        </View >
    );
}
const estilos = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    textoDica: {
        fontFamily: ESTILOS_COMUNS.fontPrincipal.thin,
        fontSize: 40,
        textAlign: 'center',
    },
    boxDesenho: {
        marginTop: 50

    },
    backGround: {
        width: 500,
        height: 500,
        opacity: 0.1
    }
})
export default TutorialAdd;