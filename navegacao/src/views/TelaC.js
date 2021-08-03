import React from 'react';
import TextoCentral from '../components/TextoCentral';

const TelaC = props => {
    const numero = props.route && props.route.params && props.route.params.numero ? props.route.params.numero : 0
    return (
        <TextoCentral corTexto='#e53935'>
            {numero}
        </TextoCentral>
    );
}

export default TelaC;