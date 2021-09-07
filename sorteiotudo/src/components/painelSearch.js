import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ESTILOS_COMUNS } from '../styles/estilosComuns';
import Icon from 'react-native-vector-icons/Ionicons'
import { SearchBar } from 'react-native-elements';
const Painel = props => {
    const [search, setSearch] = useState('')
    return (
        <View style={estilos.painel}>
            <View style={estilos.painelpesquisa}>
                <SearchBar
                    placeholder="Procurar amigo..."
                    lightTheme={true}
                    containerStyle={{ padding: 0 }}
                    value={search}
                    onChangeText={amigo => setSearch(amigo)}
                    
                />
            </View>
            <View style={estilos.painelContagem}>
                <Icon
                    color={ESTILOS_COMUNS.cores.azulPrimario}
                    name='person-add-outline'
                    size={ESTILOS_COMUNS.iconesTamanhos.grande} />
                <Text style={estilos.placar}>10</Text>
            </View>
        </View>
    );
}

const estilos = StyleSheet.create({
    placar: {
        fontFamily: ESTILOS_COMUNS.fontPrincipal.bold,
        fontSize: 30
    },
    painel: {
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent: 'space-between'
    },
    painelpesquisa: { width: '70%' },
    painelContagem: { flexDirection: 'row', alignItems: 'center', flex: 1, justifyContent: 'space-around' }

})

export default Painel;