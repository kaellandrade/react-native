import React from 'react';
import { Text, View, StyleSheet, Vibration, TouchableHighlight } from 'react-native';
import params from '../params';
import Mine from './Mine';
import Flag from './Flag';
const Field = props => {
    const { mined, opened, nearMines, exploded, flagged } = props;
    const styleFiled = [styles.field];
    // TODO: Outros estilos

    if (opened)
        styleFiled.push(styles.opened);

    if (exploded)
        styleFiled.push(styles.exploded)


    if (flagged)
        styleFiled.push(styles.flagged);

    if (!opened && !exploded)
        styleFiled.push(styles.regular);

    let color = null;
    if (nearMines > 0) {
        if (nearMines == 1) color = '#2a28d7';
        if (nearMines == 2) color = '#2b520f';
        if (nearMines > 2 && nearMines < 6) color = '#f9060a';
        if (nearMines >= 6) color = '#f221a9';
    }

    return (
        <TouchableHighlight onPress={props.onOpen} onLongPress={props.onSelect}>
            <View style={styleFiled}>
                {(!mined && opened && nearMines > 0) ? <Text style={[styles.label, { color }]}>{nearMines}</Text> : null}
                {mined && opened ? <Mine /> : null}
                {flagged && !opened ? <Flag /> : null}
            </View>
        </TouchableHighlight>

    );
}

/**
 * Estilos
 */
const styles = StyleSheet.create({
    field: {
        height: params.blockSize,
        width: params.blockSize,
        borderWidth: params.borderSize
    },
    regular: {
        backgroundColor: '#999',
        borderLeftColor: '#ccc',
        borderTopColor: '#ccc',
        borderRightColor: '#333',
        borderBottomColor: '#333'

    },
    opened: {
        backgroundColor: '#999',
        borderColor: '#777',
        alignItems: 'center',
        justifyContent: 'center'
    },
    label: {
        fontWeight: 'bold',
        fontSize: params.fontSize
    },
    exploded: {
        backgroundColor: 'red',
        borderColor: 'red'
    }
});
export default Field;