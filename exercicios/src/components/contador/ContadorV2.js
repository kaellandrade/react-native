import React, { Fragment, useState } from 'react';
import { Alert, Text } from 'react-native';
import Estilo from '../estilos';
import ContadorDisplay from '../contador/ContadorDisplay';
import Botoes from '../contador/Botoes';
const Comp = props => {
    const LIMITE_SUPER = props.super || 10;
    const LIMITE_MIN = props.min || 0;

    const [num, setNum] = useState(0);
    const incremento = _ => {
        if (num < LIMITE_SUPER)
            setNum(num + 1);
        else
            Alert.alert(`Não é permitido mais de ${LIMITE_SUPER}`)
    }
    const decremento = _ => {
        if (num > LIMITE_MIN)
            setNum(num - 1);
        else
            Alert.alert(`Não é permitido menos de ${LIMITE_MIN}`)
    }
    return (
        <Fragment>
            <Text style={Estilo.TextoM}>
                Contador V2
            </Text>
            <ContadorDisplay
                num={num}
            />
            <Botoes inc={incremento} dec={decremento} />
        </Fragment>
    );
}

export default Comp;