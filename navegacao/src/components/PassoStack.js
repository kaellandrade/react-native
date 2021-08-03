import React from 'react';
import { StyleSheet, View, Button } from 'react-native';


const PassoStack = props => {
    return (
        <View style={styles.flexArea}>
            <View style={styles.flexButton}>
                {props.avancar ? <Button title="Avançar" onPress={_ => props.navigation.navigate(props.avancar, props.avancarParams)} /> : null}
                {props.voltar ? <Button title="Voltar" onPress={_ => props.navigation.goBack()} /> : null}
            </View>

            <View style={styles.flexArea}>
                {props.children}
            </View>
        </View>

    );
}


const styles = StyleSheet.create({
    flexArea: {
        flex: 1,
    },
    flexButton: {
        flexDirection: "row-reverse",
        justifyContent: "space-between",
    }
});
export default PassoStack;