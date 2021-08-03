import React, { useState, Fragment } from 'react';
import { TextInput, View, Text, Button } from 'react-native';
import Estilo from '../estilos';

const LendoValor = props => {
    const [nome, setNome] = useState('');


    return (
        <Fragment>
            <Text style={Estilo.TextoM}> {nome.length ? `Olá, ${nome} 😄` : 'Vamos começar! 😎'} </Text>

            <View style={Estilo.Flex}>
                <TextInput
                    placeholder='Digite seu nome'
                    style={Estilo.Display}
                    value={nome}
                    onChangeText={text => setNome(text)}
                />
                <Button title='❌' onPress={_=>setNome('')}/>
            </View>
        </Fragment>
    );
}

export default LendoValor;