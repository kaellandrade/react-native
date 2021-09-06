import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { borderDebug } from '../util/functionsDebugs';
import { IconButton, Box } from "native-base";
import { ESTILOS_COMUNS } from '../styles/estilosComuns'
const Header = props => {
    return (
        <Box style={estilos.box} >
            <View style={estilos.content}>
                <View style={estilos.contentBtn}>
                    <Icon name='bars' size={ESTILOS_COMUNS.iconesTamanhos.grande} />
                </View>
                <View style={estilos.contentTitle}>
                    <Text style={estilos.title}>{props.titulo}</Text>
                </View>
            </View>
        </Box >
    );
}

const estilos = StyleSheet.create({
    box: {
        flexDirection: 'row',
    },
    title: {
        fontSize: ESTILOS_COMUNS.fontSize.title,
        fontFamily: ESTILOS_COMUNS.fontPrincipal.light,
        textAlign: 'center',
    },
    content: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',

    },
    contentBtn: {
        margin: 15,
        justifyContent: 'space-between',

    },
    contentTitle: {
        flex: 1,
        justifyContent: 'center'
    }
});

export default Header;