import React, { Fragment, useState } from 'react';
import { Text, Button } from 'react-native';
import estilo from './estilos';
import Estilo from './estilos';

const Contador = ({inicial = 0, passo = 1}) => {
    const [numero, setValor] = useState(inicial);

    const dec = _ => { setValor(numero + passo) }
    const inc = _ => { setValor(numero - passo) }


    return (
        <Fragment>
            <Text style={estilo.TextoG}>{numero}</Text>
            <Button title='+' onPress={dec} />
            <Button title='-' onPress={inc} />
        </Fragment>

    );
}

export default Contador;