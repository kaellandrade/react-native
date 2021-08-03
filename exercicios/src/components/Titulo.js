import React, {Fragment} from 'react';
import {View, Text} from 'react-native';
import estilo from './estilos';

const Titulo = props =>{
    
    return(
        <Fragment>
            <Text style={estilo.TextoG}> {props.principal} </Text>
            <Text> {props.secundario} </Text>
        </Fragment>
    );
}

export default Titulo;