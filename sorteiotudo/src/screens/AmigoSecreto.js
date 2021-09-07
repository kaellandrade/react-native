import { FlatList, Box, Fab } from 'native-base';
import React, { useState } from 'react';
import { Dimensions, SafeAreaView, StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native';
import { connect } from 'react-redux';
import IconBtn from '../components/IconButton'
import { ESTILOS_COMUNS } from '../styles/estilosComuns';
import { randomColor } from '../util/randomColor';
import { Header, FAB } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import Painel from '../components/painelSearch';
import BtnSorteio from '../components/BtnSorteio';

const renderFriend = ({ item }) => {
    const iniciaisRegx = /\b\w/gi;
    const [nome] = item.nome.match(iniciaisRegx);
    return (
        <Box style={estilos.boxFrind} m={0.5} rounded={10} p={2} shadow={0.7}>
            <Box style={[estilos.avatar, { backgroundColor: randomColor() }]}>
                <Text style={{ fontSize: 25 }}>{nome}</Text>
            </Box>

            <View style={{ flex: 1 }}>
                <Text style={estilos.nome}>{item.nome}</Text>
                <Text style={estilos.email}>{item.email}</Text>
            </View>

            <View style={estilos.btnGroups}>
                <IconBtn
                    color={ESTILOS_COMUNS.cores.cuidado}
                    Onpress={_ => console.warn(item.id)} name='edit' size={ESTILOS_COMUNS.iconesTamanhos.grande} />
                <IconBtn
                    color={ESTILOS_COMUNS.cores.perigo}
                    Onpress={_ => console.warn(item.id)} name='trash' size={ESTILOS_COMUNS.iconesTamanhos.grande} />
            </View>
        </Box>
    )
}

const AmigoSecreto = props => {
    const amigosCadastrados = props.cadastrados
    return (
        <View style={estilos.container}>
            <Header
                barStyle="default"
                placement="center"
                leftComponent={{ icon: 'menu', color: '#fff' }}
                centerComponent={
                    {
                        text: 'Adicione seus amigos!',
                        style: {
                            color: '#fff',
                            fontFamily: ESTILOS_COMUNS.fontPrincipal.light,
                            fontSize: 20
                        }
                    }
                }

            />
            {/* //TODO: ELIMINAR <Header titulo='Adicione seus Amigos!' /> */}
            <Painel />
            <SafeAreaView style={estilos.conteudo}>
                <FlatList
                    data={amigosCadastrados}
                    renderItem={renderFriend}
                    keyExtractor={item => item.id}
                />
                <TouchableNativeFeedback>
                    <View style={estilos.butonAdd}>
                        <Icon color={ESTILOS_COMUNS.cores.secundaria} name='plus' size={ESTILOS_COMUNS.iconesTamanhos.grande} />
                    </View>
                </TouchableNativeFeedback>
                
            </SafeAreaView>
            <BtnSorteio/>
        </View >
    );
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
    },
    conteudo: {
        flex: 1,
        backgroundColor: ESTILOS_COMUNS.cores.secundaria
    },
    avatar: {
        borderWidth: 1,
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'black'
    },
    boxFrind: {
        flex: 1,
        flexDirection: 'row',
        alignContent: 'center',
        backgroundColor: 'white',
        borderColor: ESTILOS_COMUNS.cores.azulSecundario,
        borderWidth: 0.5
    },
    btnGroups: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 10
    },
    nome: {
        fontFamily: ESTILOS_COMUNS.fontPrincipal.medium,
        fontSize: 20
    },
    email: {
        fontFamily: ESTILOS_COMUNS.fontPrincipal.light,
        fontSize: 15
    },
    butonAdd: {
        backgroundColor: ESTILOS_COMUNS.cores.sucesso,
        width: 60,
        height: 60,
        borderRadius: 30,
        position: 'absolute',
        bottom: 10,
        right: Dimensions.get('window').width * 1 / 2 - 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: ESTILOS_COMUNS.cores.principal,
        borderWidth: 1,
        shadowColor: "#000",

        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    }

})

const mapStateToProps = ({ friends }) => {
    return {
        cadastrados: friends.amigosCadastrados
    }
}

export default connect(mapStateToProps, null)(AmigoSecreto);
