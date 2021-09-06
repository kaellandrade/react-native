import { FlatList, Box } from 'native-base';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import Header from '../components/Header';
import IconBtn from '../components/IconButton'
import { ESTILOS_COMUNS } from '../styles/estilosComuns';
import { randomColor } from '../util/randomColor';
import { SearchBar } from 'react-native-elements'
import { borderDebug } from '../util/functionsDebugs';
import Icon from 'react-native-vector-icons/FontAwesome'

const renderFriend = ({ item }) => {
    const iniciaisRegx = /\b\w/gi;
    const [nome] = item.nome.match(iniciaisRegx);
    return (
        <Box style={estilos.boxFrind} m={0.5} rounded={10} p={2} shadow={0.5}>
            <Box style={[estilos.avatar, { backgroundColor: randomColor() }]}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 25 }}>{nome}</Text>
                </View>
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
// TODO: organizar os estilos
const AmigoSecreto = props => {
    const amigosCadastrados = props.cadastrados
    return (
        <View style={estilos.container}>
            <Header titulo='Adicione seus Amigos!' />
            <View style={{ flexDirection: 'row', backgroundColor: 'white', justifyContent: 'space-between' }}>
                <View style={{ width: '70%' }}>
                    <SearchBar
                        placeholder="Procurar amigo..."
                        lightTheme={true}
                        containerStyle={{ padding: 0 }}

                    />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1, justifyContent: 'space-around' }}>
                    <Icon color={ESTILOS_COMUNS.cores.amizade} name='users' size={ESTILOS_COMUNS.iconesTamanhos.grande} />
                    <Text style={estilos.placar}>{amigosCadastrados.length}</Text>
                </View>
            </View>
            <SafeAreaView style={estilos.conteudo}>
                <FlatList
                    data={amigosCadastrados}
                    renderItem={renderFriend}
                    keyExtractor={item => item.id}
                />

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
        marginRight: 5,
        justifyContent: 'center',
        alignItems: 'center'
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
    placar: {
        fontFamily: ESTILOS_COMUNS.fontPrincipal.bold,
        fontSize: 30
    }
})

const mapStateToProps = ({ friends }) => {
    return {
        cadastrados: friends.amigosCadastrados
    }
}

export default connect(mapStateToProps, null)(AmigoSecreto);
