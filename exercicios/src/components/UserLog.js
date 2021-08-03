import React, { Fragment } from 'react';
import { Text } from 'react-native';
import Estilo from './estilos';
import If from './If';

const UserLog = props => {
    const usuario = props.usuario || {};
    return (
        <Fragment>
            <If teste={Object.keys(usuario).length ? true : false}>
                <Text style={Estilo.TextoM}>Usuario logado:</Text>
                <Text style={Estilo.TextoM}>
                    {usuario.nome} - {usuario.email}
                </Text>
            </If>
        </Fragment>
    );
}

export default UserLog;