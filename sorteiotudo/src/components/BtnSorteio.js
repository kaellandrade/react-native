import React, { Component, useState } from 'react';
import { TouchableNativeFeedback, View, StyleSheet, Dimensions, Vibration, Alert } from 'react-native';
import { ESTILOS_COMUNS } from '../styles/estilosComuns';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Fragment } from 'react';
import { FAB } from 'react-native-elements';
import { UM_SEGUNDO_MS } from '../util/constantes';
import { useToast } from 'native-base';
//TODO: JUSTAR ESSE COMPONENTE
const BtnSorteio = props => {
    const [showOptions, setShow] = useState(false);
    const toast = useToast();
    return (
        <Fragment>
            <FAB
                title='Sortear'
                visible={showOptions}
                icon={{ name: 'shuffle', color: 'white' }}
                size="small"
                style={{ position: 'absolute', bottom: 130, left: 20, backgroundColor: 'red' }}
                color={ESTILOS_COMUNS.cores.azulSecundario}
                onPress={_ => {
                    props.sortear(true)
                    setTimeout(
                        _ => {
                            props.sortear(false);
                            toast.show({
                                title: "Sorteio realizado com sucesso!",
                                status: "success",
                                description: "Agora você pode disparar os e-mails.",
                                placement:'top',
                            })
                        }, UM_SEGUNDO_MS * 2
                    );
                }}
            />
            <FAB
                title='Disparar Emails'
                visible={showOptions}
                icon={{ name: 'send', color: 'white' }}
                size="small"
                style={{ position: 'absolute', bottom: 70, left: 20 }}
                color={ESTILOS_COMUNS.cores.azulPrimario}
                disabled={true}

            />

            <TouchableNativeFeedback onPress={_ => {
                Vibration.vibrate(UM_SEGUNDO_MS * 0.04)
                setShow(!showOptions)
            }}>
                <View style={estilos.sorteio}>
                    <Icon color={ESTILOS_COMUNS.cores.secundaria}
                        name='gift'
                        size={ESTILOS_COMUNS.iconesTamanhos.grande}
                    />
                </View>
            </TouchableNativeFeedback>
        </Fragment>
    );
}

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