import React, { Component } from 'react';
import { Text, View, StyleSheet, ImageBackground } from 'react-native';
import Task from '../components/Task';
import TodayImage from '../../assets/imgs/today.png';

import comonStyles from '../comonStyles';

import moment from 'moment';
import 'moment/locale/pt-br';
/**
 * Componente principal.
 */
class TaskList extends Component {
    render() {
        const today = moment().locale('pt-br').format('ddd, D [de] MMMM');
        return (
            <View style={styles.container}>
                <ImageBackground style={styles.backGround} source={TodayImage}>
                    <View style={styles.titleBar}>
                        <Text style={styles.title}>Hoje</Text>
                        <Text style={styles.SubTitle} >{today}</Text>
                    </View>
                </ImageBackground>
                <View style={styles.taskList}>
                    <Task desc='Ler Livro' estimateAt={new Date()} />
                    <Task desc='Comprar Livro' estimateAt={new Date()} doneAt={new Date()} />
                    <Task desc='Estudar Java Script' estimateAt={new Date()} doneAt={new Date()} />

                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    backGround: {
        flex: 3
    },
    taskList: {
        flex: 7
    },
    titleBar: {
        flex: 1,
        alignItems: "flex-start"
    },
    title: {
        fontFamily: 'Lato',
        fontSize: 35,
        color: comonStyles.colors.secundary,
        marginBottom: 20,
        marginLeft: 20
    },
    SubTitle: {
        fontFamily: 'Lato',
        fontSize: 20,
        color: comonStyles.colors.secundary,
        marginBottom: 20,
        marginLeft: 20
    }
});

export default TaskList;