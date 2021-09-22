import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    TextInput,
    ImageBackground
} from 'react-native';
import IconButton from '../components/IconButton';
import firebase from 'firebase';
import image from '../../assets/imgs/back.jpg'

class Register extends Component {
    state = { name: '', email: '', password: '' }

    register = () => {
        const { name, email, password } = this.state
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((resp) => {
                console.log(resp)
            }).catch((err) => {
                console.log(err)
            })
    }

    render() {
        return (
            <ImageBackground blurRadius={0} source={image} style={styles.container}>
                <View style={styles.inputGroups}>
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
                        press={this.register}
                        label='Registrar'
                        name='sign-out'
                        size={20}
                        color='tomato'
                    />
                </View>
            </ImageBackground>
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
        backgroundColor: '#DDDDDD',
        height: 60,
        borderColor: '#333',
        color: 'black',
        padding: 15,
        fontSize: 20,
        marginTop: 10,
        borderRadius: 10
    },
    inputGroups: {
        width: '90%',
        alignSelf: 'center'
    }
})
export default Register;