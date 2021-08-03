import React from 'react';
import { Text, Platform } from 'react-native';

const Plataforma = props => {
    const SISTEMA = Platform.OS.toUpperCase();
    switch (SISTEMA) {
        case 'ANDROID':
            return <Text>Andoid</Text>

        case 'IOS':
            return <Text>IOS</Text>
        default:
            return <Text>Sistema </Text>

    }
}

export default Plataforma;