import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Modal } from 'react-native';
const LEVELS = {
    FACIL: 0.1,
    INTERMEDIARIO: 0.2,
    DIFICIL: 0.3
}

const TouchOpacity = props => (
    <TouchableOpacity style={props.styles}
        onPress={_ => props.onLevelSelected(props.level)}>
        <Text style={styles.buttonLabel}>{props.label}</Text>
    </TouchableOpacity>
)
const LevelSlection = props => {
    return (
        <Modal
            onRequestClose={props.onCancel}
            visible={props.isVisible}
            animationType='slide'
            transparent={true}
        >
            <View style={styles.frame}>
                <View style={styles.container}>
                    <Text style={styles.title}> Selecione o Nível</Text>
                    <TouchOpacity onLevelSelected={props.onLevelSelected} styles={[styles.button, styles.bgEasy]} label='Fácil' level={LEVELS.FACIL} />
                    <TouchOpacity onLevelSelected={props.onLevelSelected} styles={[styles.button, styles.bgNormal]} label='Intermediário' level={LEVELS.INTERMEDIARIO} />
                    <TouchOpacity onLevelSelected={props.onLevelSelected} styles={[styles.button, styles.bgHard]} label='Difícil' level={LEVELS.DIFICIL} />
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    frame: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)'

    },
    container: {
        backgroundColor: '#eee',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
        borderRadius: 10
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    button: {
        marginTop: 10,
        padding: 5
    },
    buttonLabel: {
        fontSize: 20,
        color: '#eee',
        fontWeight: 'bold'
    },
    bgEasy: {
        backgroundColor: '#49b65d'
    },
    bgNormal: {
        backgroundColor: '#2765f7'
    },
    bgHard: {
        backgroundColor: '#f26337'
    }
});

export default LevelSlection;