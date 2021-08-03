import React from 'react';
import { Button, Text, View } from 'react-native'
import TextoCentral from '../components/TextoCentral';

const TelaD = props => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                <Button  title='Abrir' onPress={_ => {
                    props.navigation.openDrawer();
                }} />
            </View>
            <View style={{ flex: 1 }}>
                <TextoCentral corTexto='#000'>
                    <Text>Sou a tela D</Text>
                </TextoCentral>

            </View>
        </View>
    );
}

export default TelaD;