import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    ActivityIndicator
} from 'react-native';

import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

class AuthOrApp extends Component {
    componentDidMount = async () => {
        const userDataJson = await AsyncStorage.getItem('userData');
        let userData = null;

        try {
            userData = JSON.parse(userDataJson);
        } catch (error) {
            console.error(error.message)
            // userData está inválido (sem token)
        }

        if (userData && userData.token) {
            axios.defaults.headers.common['Authorization'] = `bearer ${userData.token}`;
            this.props.navigation.navigate('Home', userData);
        } else {
            this.props.navigation.navigate('Auth');
        }

    }

    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator size='large' color='#61DAFB' />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black'
    }
});

export default AuthOrApp;