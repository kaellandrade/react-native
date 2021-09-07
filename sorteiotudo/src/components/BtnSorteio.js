import React, { Component } from 'react';
import { TouchableNativeFeedback, View, StyleSheet, Dimensions, TouchableWithoutFeedback } from 'react-native';
import { ESTILOS_COMUNS } from '../styles/estilosComuns';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Fragment } from 'react';
import { FAB } from 'react-native-elements';
//TODO: JUSTAR ESSE COMPONENTE
class BtnSorteio extends Component {
    state = {
        showOptions: false
    }
    render() {
        return (
            <Fragment>
                <FAB
                    title='Sortear'
                    visible={this.state.showOptions}
                    icon={{ name: 'shuffle', color: 'white' }}
                    size="small"
                    style={{ position: 'absolute', bottom: 130, left: 20, backgroundColor:'red' }}
                    color={ESTILOS_COMUNS.cores.azulSecundario}
                />
                <FAB
                    title='Disparar Emails'
                    visible={this.state.showOptions}
                    icon={{ name: 'send', color: 'white' }}
                    size="small"
                    style={{ position: 'absolute', bottom: 70, left: 20 }}
                    color={ESTILOS_COMUNS.cores.azulPrimario}
                    disabled={true}

                />

                <TouchableWithoutFeedback onPress={_ => this.setState({ showOptions: !this.state.showOptions })}>
                    <View style={estilos.sorteio}>
                        <Icon color={ESTILOS_COMUNS.cores.secundaria}
                            name='gift'
                            size={ESTILOS_COMUNS.iconesTamanhos.grande}
                        />
                    </View>
                </TouchableWithoutFeedback>
            </Fragment>
        );
    }
};

const estilos = StyleSheet.create({
    sorteio: {
        position: 'absolute',
        left: Dimensions.get('window').width * 1 / 30,
        bottom: 10,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 30,
        width: 60,
        height: 60,
        backgroundColor: ESTILOS_COMUNS.cores.larajan,
        justifyContent: 'center',
        alignItems: 'center',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    },
    sorteioSortear: {
        position: 'absolute',
        bottom: 70,
        left: Dimensions.get('window').width * 1 / 30,
    },
    enviarSorteio: {
        position: 'absolute',
        bottom: 120,
        left: Dimensions.get('window').width * 1 / 30,
    }
})
export default BtnSorteio;