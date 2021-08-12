import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    ImageBackground,
    TextInput,
    TouchableOpacity,
    Platform,
    Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import backGroundImage from '../../assets/imgs/login.jpg'
import comonStyles from '../comonStyles';
import If from '../components/If';

class Auth extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        stageNew: false,
        secureEntryModel: true
    }

    signinOrSigout = () => {
        if (this.state.stageNew) {
            Alert.alert('Sucesso!', 'Criar Usuário')
        } else {
            Alert.alert('Sucesso!', 'Logar')
        }
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
                        <TextInput placeholderTextColor='gray' onChangeText={name => this.setState({ name })} style={styles.input} placeholder='Nome' value={this.state.name} />
                    </If>
                    <TextInput keyboardType='email-address' placeholderTextColor='gray' onChangeText={email => this.setState({ email })} style={styles.input} placeholder='E-Mail' value={this.state.email} />

                    <View style={{ position: "relative", justifyContent: "center" }} >
                        <TextInput placeholderTextColor='gray' onChangeText={password => this.setState({ password })}
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
                        <TextInput placeholderTextColor='gray' onChangeText={confirmPassword => this.setState({ confirmPassword })}
                            style={styles.input}
                            secureTextEntry={this.state.secureEntryModel}
                            placeholder='Confirme a senha'
                            value={this.state.confirmPassword} 
                            />
                    </If>
                    <TouchableOpacity onPress={this.signinOrSigout} activeOpacity={0.8}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>
                                {this.state.stageNew ? "Registrar " : "Entrar "}
                                <Icon size={comonStyles.icon.size_sm} name={this.state.stageNew ? 'plus' : 'sign-in-alt'} />
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity activeOpacity={0.9} style={{ padding: 10, backgroundColor: 'grey', borderRadius: 20, margin: 5 }} onPress={_ => this.setState({ stageNew: !this.state.stageNew })}>
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
        padding: Platform.OS == 'ios' ? 15 : 10,
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
        borderRadius: 20
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