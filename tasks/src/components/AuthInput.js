import React from 'react';
import { View, StyleSheet, TextInput, BackHandler, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import comonStyles from '../comonStyles';


const AuthInput = props => {
    return (
        <View style={[styles.container, props.style]}>
            <Icon name={props.icon} size={comonStyles.icon.size_sm} style={styles.icon} />
            <TextInput {...props} style={styles.input} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 40,
        backgroundColor: '#eee',
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center'

    },
    icon: {
        color: '#333',
        marginLeft: 20
    },
    input: {
        marginLeft: 20,
        width: '70%'

    }
});

export default AuthInput;