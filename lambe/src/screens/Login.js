import React, { Component } from 'react';
import { View, StyleSheet, TextInput, ImageBackground } from 'react-native';

import IconButton from '../components/IconButton';

import { connect } from 'react-redux';
import { login } from '../store/actions/user'
import Icon from 'react-native-vector-icons/FontAwesome';
import image from '../../assets/imgs/back.jpg'
class Login extends Component {
    state = {
        name: 'Micael',
        email: '',
        password: '',
        securePass: true,
    }

    login = () => {
        this.props.onLogin({ ...this.state })
    }

    render() {
        return (
            <ImageBackground blurRadius={0} source={image} style={styles.container}>
                <View style={styles.inputGroups}>
                    <TextInput
                        placeholderTextColor='#7779'
                        placeholder='Email'
                        style={styles.input} autoFocus={true}
                        keyboardType='email-address'
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                    />
                    <View style={styles.passwordButton}>
                        <TextInput
                            placeholderTextColor='#7779'
                            placeholder='Senha'
                            style={[styles.input]}
                            secureTextEntry={this.state.securePass}
                            value={this.state.password}
                            onChangeText={password => this.setState({ password })}
                        />
                        <Icon onPress={_ => { this.setState({ securePass: !this.state.securePass }) }}
                            style={styles.icon}
                            color='#001f3f'
                            name={this.state.securePass ? 'eye-slash' : 'eye'} size={30} />
                    </View>
                </View>
                <View style={styles.btnGroups}>
                    <IconButton style={{ color: 'blue' }} name='thumbs-up' color='#fd5c59' press={this.login} label='Login' />
                    <IconButton name='plus-square' color='#374138' press={_ => { console.warn('Abrir tela de Login') }} label='Criar nova conta...' />
                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
    },
    inputGroups: {
        width: '90%',
        // ...debug('tomato'),
        alignSelf: 'center'
    },
    btnGroups: {
        width: '90%',
        // ...debug('pink'),
        alignSelf: 'center',
    },
    passwordButton: {
        // ...debug('black'),
        position: 'relative',
    },
    icon: {
        position: 'absolute',
        right: 8,
        top: 21,
        height: 60,



    },
    input: {
        backgroundColor: '#DDDDDD',
        height: 60,
        borderColor: '#333',
        color: 'black',
        padding: 15,
        fontSize: 20,
        marginTop: 10,
        borderRadius: 10
    }

})

const mapDispatcTohProps = dispatch => {
    return {

        onLogin: user => dispatch(login(user))
    }
}
export default connect(null, mapDispatcTohProps)(Login)