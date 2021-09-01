import React, { Component } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

import IconButton from '../components/IconButton';

import { connect } from 'react-redux';
import { login } from '../store/actions/user'

class Login extends Component {
    state = {
        name: 'Micael',
        email: '',
        password: ''
    }

    login = () => {
        this.props.onLogin({ ...this.state })
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
                <IconButton name='plus-square' color='#0074D9' press={_ => { console.warn('Abrir tela de Login') }} label='Criar nova conta...' />
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

const mapDispatcTohProps = dispatch => {
    return {

        onLogin: user => dispatch(login(user))
    }
}
export default connect(null, mapDispatcTohProps)(Login)