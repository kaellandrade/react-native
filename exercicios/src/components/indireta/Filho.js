import React from 'react';
import { Button, Text } from 'react-native';

const Filho = props => {

    const gerarNumero = (min = 0, max = 10) => {
        const fator = max - min + 1;
        const random = Math.floor(Math.random() * fator) + min;
        props.funPai(random); // Excutando a função definida dentro do pai
        return random;
    }

    return (
        <Button
            title={props.sobrenome}
            onPress={_ => { gerarNumero(props.min, props.max) }}
        />
    );
}

export default Filho;