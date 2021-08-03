import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { randomColor } from './util/randomColor';
import Mega from './components/megaSena/Mega';

const App = _ => (
    <SafeAreaView style={style.App}>
        <Mega qtdNumeros={1} />
    </SafeAreaView>
)
const style = StyleSheet.create({
    App: {
        backgroundColor: randomColor(),
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    }
})
export default App;