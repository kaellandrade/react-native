import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

import IconButton from '../components/IconButton';


class Login extends Component {
    state = {
        email: '',
        password: ''
    }

    login = () => {
        console.log(this.props.navigation)
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    placeholder='Email'
                    style={styles.input} autoFocus={true}
                    keyboardType='email-address'
                    value={this.state.email}
                    onChangeText={email => this.setState({ email })}
                />
                <TextInput
                    placeholder='Senha' style={styles.input}
                    secureTextEntry={true}
                    value={this.state.password}
                    onChangeText={password => this.setState({ password })}
                />
                <IconButton name='thumbs-up' color='#3D9970' press={this.login} label='Login' />
                <IconButton name='plus-square' color='#0074D9' press={_ => { }} label='Criar nova conta...' />

            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "center"
    },
    input: {
        marginTop: 20,
        width: '90%',
        backgroundColor: '#eee',
        height: 40,
        borderWidth: 1,
        borderColor: '#333'
    }
})
export default Login;