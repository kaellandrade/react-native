import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    ImageBackground,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import backGroundImage from '../../assets/imgs/login.jpg'
import comonStyles from '../comonStyles';
import If from '../components/If';
import AsyncStorage from '@react-native-community/async-storage';
import AuthInput from '../components/AuthInput';
import axios from 'axios';
import { server, showError, showSuccess } from '../common'

const initialState = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    stageNew: false,
    secureEntryModel: true
}
class Auth extends Component {
    state = {
        ...initialState
    }

    signinOrSigout = () => {
        if (this.state.stageNew) {
            this.signup();
        } else {
            this.signin();
        }
    }
    signin = async _ => {
        try {
            const res = await axios.post(`${server}/signin`, {
                email: this.state.email,
                password: this.state.password
            });

            AsyncStorage.setItem('userData', JSON.stringify(res.data)); // Quando logado será inserido no Async

            // Setando no header Autorization para futuras requisições
            axios.defaults.headers.common['Authorization'] = `bearer ${res.data.token}`
            this.props.navigation.navigate('Home', res.data);
        } catch (error) {
            showError(error.response.data.msg)
        }
    }


    /**
     * Método de cadastro.
     */
    signup = async _ => {
        try {
            await fetch(`${server}/signup`, { // Usando o Fetch
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(this.state)
            })

            showSuccess('Usuário cadastrado!');
            this.setState({ ...initialState });

        } catch (error) {
            showError(error.response.data.msg);
        }
    }
    /**
     * Verifica se os dados informados são válidos;
     */

    get isValid() {
        // Aqui poderíamos usar uma regex
        const validations = [];
        validations.push(this.state.email && this.state.email.includes('@'))
        validations.push(this.state.password && this.state.password.length >= 6)

        if (this.state.stageNew) {
            validations.push(this.state.password === this.state.confirmPassword)
            validations.push(this.state.name && this.state.name.trim().length >= 3)
        }
        return validations.reduce((acc, att) => acc && att);
    }

    render() {

        return (
            <ImageBackground style={styles.background} source={backGroundImage}>
                <Text style={styles.title}>Todo React</Text>
                <View style={styles.formContainer}>
                    <Text style={styles.subtitle}>
                        {this.state.stageNew ? "Crie a sua conta" : "Informe seus Dados"}
                    </Text>
                    <If state={this.state.stageNew}>
                        <AuthInput icon='user' placeholderTextColor='gray' onChangeText={name => this.setState({ name })} style={styles.input} placeholder='Nome' value={this.state.name} />
                    </If>
                    <AuthInput icon='at' keyboardType='email-address'
                        placeholderTextColor='gray'
                        onChangeText={email => this.setState({ email })}
                        style={styles.input} placeholder='E-Mail'
                        value={this.state.email} />

                    <View style={{ position: "relative", justifyContent: "center" }} >
                        <AuthInput icon='lock' placeholderTextColor='gray' onChangeText={password => this.setState({ password })}
                            style={styles.input}
                            secureTextEntry={this.state.secureEntryModel}
                            placeholder='Senha'
                            value={this.state.password} />
                        <TouchableOpacity
                            onPress={_ => this.setState({ secureEntryModel: !this.state.secureEntryModel })}
                            style={{ position: 'absolute', left: '88%' }}>
                            <Icon
                                size={comonStyles.icon.size_sm}
                                name={this.state.secureEntryModel ? "eye-slash" : "eye"}
                                color='gray'
                            />
                        </TouchableOpacity>
                    </View>

                    <If state={this.state.stageNew}>
                        <AuthInput
                            icon='asterisk'
                            placeholderTextColor='gray' onChangeText={confirmPassword => this.setState({ confirmPassword })}
                            style={styles.input}
                            secureTextEntry={this.state.secureEntryModel}
                            placeholder='Confirme a senha'
                            value={this.state.confirmPassword}
                        />
                    </If>
                    <TouchableOpacity
                        onPress={this.signinOrSigout}
                        activeOpacity={0.8}
                        disabled={!this.isValid}
                    >
                        <View style={[styles.button, !this.isValid ? { backgroundColor: 'gray' } : null]}>
                            <Text style={styles.buttonText}>
                                {this.state.stageNew ? "Registrar " : "Entrar "}
                                <Icon size={comonStyles.icon.size_sm} name={this.state.stageNew ? 'plus' : 'sign-in-alt'} />
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity activeOpacity={0.9} style={{ padding: 10, backgroundColor: 'grey', borderRadius: 7, margin: 5 }} onPress={_ => this.setState({ stageNew: !this.state.stageNew })}>
                    <Text style={styles.buttonText}>
                        {this.state.stageNew ? "Já possui conta?🤔 " : "Ainda não possui conta?😱 "}
                    </Text>
                </TouchableOpacity>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontFamily: comonStyles.fontFamily,
        fontSize: 70,
        color: comonStyles.colors.secundary,
        marginBottom: 10
    },
    input: {
        margin: 10,
        backgroundColor: '#fff',
        color: 'black',
        borderRadius: 20

    },
    formContainer: {
        backgroundColor: 'rgba(0,0,0,0.8)',
        padding: 20,
        width: "90%",
        borderRadius: 20
    },
    button: {
        backgroundColor: '#080',
        marginTop: 10,
        padding: 10,
        alignItems: 'center',
        borderRadius: 7
    },
    buttonText: {
        fontFamily: comonStyles.fontFamily,
        color: 'white',
        fontSize: 20
    },
    subtitle: {
        fontFamily: comonStyles.fontFamily,
        fontSize: 20,
        color: '#ccc',
        textAlign: 'center',
        marginBottom: 10
    }
});

export default Auth;