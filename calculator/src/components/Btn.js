import React from 'react';
import { StyleSheet, Text, Dimensions, TouchableHighlight } from 'react-native';

const DIMENSIONS = Dimensions.get('window').width / 4;

const Btn = props => {
    const styleButton = [styles.button];
    if (props.double)
        styleButton.push(styles.buttonDouble);

    if (props.triple)
        styleButton.push(styles.buttonTriple);

    if (props.operation)
        styleButton.push(styles.operationButton);


    return (
        <TouchableHighlight onPress={_ => props.onClick(props.label)}>
            <Text style={[styleButton]}>{props.label}</Text>
        </TouchableHighlight>
    );
}

/**
 * Estilo
 */
const styles = StyleSheet.create({
    button: {
        fontSize: 40,
        height: DIMENSIONS,
        width: DIMENSIONS,
        padding: 20,
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
        borderWidth: 0.3,
        borderColor: '#888'
    },
    operationButton: {
        color: '#fff',
        backgroundColor: '#fa8231'
    },
    buttonDouble: {
        width: DIMENSIONS * 2,
    },
    buttonTriple: {
        width: DIMENSIONS * 3,
    }
});


export default Btn;