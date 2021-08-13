import { Alert, Platform } from 'react-native';

const server = Platform.OS === 'ios' ? 'http://localhost:3000' : 'http://192.168.1.9:3000';
const showError = (err) => {
    Alert.alert('Ops! Ocorreu um erro!', `Mensagem: ${err}`)
}

const showSuccess = (msg) => {
    Alert.alert('Sucesso!', msg)
}

export { server, showError, showSuccess };