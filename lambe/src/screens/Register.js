import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput
} from 'react-native';
import IconButton from '../components/IconButton';

class Register extends Component {
    state = { name: '', email: '', password: '' }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    placeholder='Nome'
                    style={styles.input}
                    autoFocus={true}
                    value={this.state.name}
                    onChangeText={name => this.setState({ name })}
                />
                <TextInput
                    placeholder='Email'
                    style={styles.input}
                    value={this.state.email}
                    onChangeText={email => this.setState({ email })}
                    keyboardType='email-address'
                />
                <TextInput
                    placeholder='Senha'
                    style={styles.input}
                    secureTextEntry={true}
                    value={this.state.password}
                    onChangeText={password => this.setState({ password })}
                />
                <IconButton
                    press={_ => console.warn(this.state.name)}
                    label='Registrar'
                    name='sign-out'
                    size={20}
                    color='tomato'
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        marginTop: 20,
        width: '90%',
        backgroundColor: '#EEE',
        height: 40,
        borderWidth: 1,
        borderColor: '#333',
        paddingLeft: 15
    }
})
export default Register;