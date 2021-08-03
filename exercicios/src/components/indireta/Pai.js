import React, { Fragment, useState } from 'react';
import Filho from './Filho';
import {Text} from 'react-native';
import Estilo from '../estilos';

const Pai = props => {
    const [valor, setValor] = useState(0);

    // Função que resrá usado pelo filho
    const funPai = (resposta) => {
        console.warn(`O filho disse : ${resposta}`);
        setValor(resposta);
    }

    return (
        <Fragment>
            <Text style={Estilo.TextoG}>{valor}</Text>
            <Filho
                min={60}
                max={100}
                sobrenome={props.sobrenome}
                funPai={funPai} />
        </Fragment>
    );
}

export default Pai;