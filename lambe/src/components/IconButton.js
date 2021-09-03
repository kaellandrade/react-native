import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const IconButton = props => {
    return (
        <TouchableOpacity activeOpacity={0.9} style={[styles.button, { backgroundColor: props.color || '#4286f4' }]} onPress={props.press}>
            <Icon style={styles.buttonText} name={props.name} size={props.size} />
            <Text style={styles.buttonText}> {props.label}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        marginTop: 30,
        padding: 15,
        backgroundColor: '#4286f4',
        borderRadius: 5,
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 20,
        color: 'white'
    }
})

export default IconButton;