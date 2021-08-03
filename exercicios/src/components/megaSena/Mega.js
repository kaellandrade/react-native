import React, { Component, Fragment } from 'react';
import { Text, TextInput, Button, View } from 'react-native';
import Estilo from '../estilos.js';
import EstiloMega from './Estilo';
import geraNumeros from '../../util/randomArray';
import Numero from './Numero';
/**
 * Cria um componente MegaSena
 */
class Mega extends Component {
    state = {
        qtdNumeros: this.props.qtdNumeros,
        numeros: []
    }
    constructor(props) {
        super(props);
    }

    //Monitora Evento
    alterQtdNumber = (qtd) => {
        this.setState({ qtdNumeros: qtd })
    }

    alteraNumeros = _ => {
        let numerosGerados = geraNumeros(this.state.qtdNumeros);
        numerosGerados.sort((a, b) => (a - b));
        this.setState({ numeros: numerosGerados })
    }

    mostraNumeros = _ => (
        this.state.numeros.map((num, index) => <Numero key={index} numero={num} />)

    );


    render() {
        return (
            <Fragment>
                <Text style={Estilo.TextoM}>Gerador Mega-Sena {this.state.qtdNumeros}</Text>
                <TextInput
                    keyboardType={'numeric'}
                    style={EstiloMega.input}
                    placeholder='Quantos números?'
                    value={String(this.state.qtdNumeros)}
                    onChangeText={this.alterQtdNumber}
                    maxLength={1}
                />
                <Button
                    title='Gerar'
                    onPress={this.alteraNumeros}
                />
                <View style={Estilo.Flex}>
                    {this.mostraNumeros()}
                </View>
            </Fragment>
        );
    }
}

export default Mega;