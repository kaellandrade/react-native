import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { colorRandom } from '../util/colorRandom';
const TextoCentral = props => {
    const TXT_COLOR = props.corTexto || '#FFF';
    return (
        <View style={[styles.styleView, { backgroundColor: colorRandom() }]}>
            <Text style={[styles.styleTxt, { color: TXT_COLOR }]}>{props.children}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    styleView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    styleTxt: {
        fontSize: 50
    }
});

export default TextoCentral;