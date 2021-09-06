import { Container, Center, FlatList, Box } from 'native-base';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { flex } from 'styled-system';
import Header from '../components/Header';
import { borderDebug } from '../util//functionsDebugs'
import IconBtn from '../components/IconButton'
import { ESTILOS_COMUNS } from '../styles/estilosComuns';

const renderFriend = ({ item }) => {
    return (
        <Box
            style={estilos.boxFrind}
            m={0.5}
            rounded={10}
            p={2}
            shadow={0.5}
        >
            <Box
                style={estilos.avatar}
            >

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
            <Header titulo='Adicione seus Amigos!' />
            <SafeAreaView style={estilos.conteudo}>
                <View>
                    <FlatList
                        data={amigosCadastrados}
                        renderItem={renderFriend}
                        keyExtractor={item => item.id}
                    />
                </View>

            </SafeAreaView>
        </View >
    );
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        // ...borderDebug(1, 'red')
    },
    conteudo: {
        flex: 1,
        // ...borderDebug(1, 'blue'),
        backgroundColor: ESTILOS_COMUNS.cores.secundaria
    },
    avatar: {
        borderWidth: 1,
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 5
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
    }
})

const mapStateToProps = ({ friends }) => {
    return {
        cadastrados: friends.amigosCadastrados
    }
}

export default connect(mapStateToProps, null)(AmigoSecreto);
