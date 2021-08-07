import React, { Component } from 'react';
import { Text, View, StyleSheet, ImageBackground, FlatList } from 'react-native';
import Task from '../components/Task';
import TodayImage from '../../assets/imgs/today.png';

import comonStyles from '../comonStyles';

import moment from 'moment';
import 'moment/locale/pt-br';
/**
 * Componente principal.
 */
class TaskList extends Component {
    state = {
        tasks: [
            {
                id: Math.random(),
                desc: 'Comprar livro de React Native',
                estimateAt: new Date(),
            },
            {
                id: Math.random(),
                desc: 'Finalizar trabalho POO',
                estimateAt: new Date(),
            },
            {
                id: Math.random(),
                desc: 'Ligar para mãe',
                estimateAt: new Date(),
                doneAt: new Date(),
            },
            {
                id: Math.random(),
                desc: 'Falar com o professor sobre o projeto',
                estimateAt: new Date(),
                doneAt: new Date(2018, 11, 27),
            },
            {
                id: Math.random(),
                desc: 'Estudar Estruturas de Dados',
                estimateAt: new Date(2021, 7, 3),
                doneAt: new Date(2021, 7, 5),
            },
            {
                id: Math.random(),
                desc: 'Comprar curso de Dev WEB',
                estimateAt: new Date(),
            },
            {
                id: Math.random(),
                desc: 'Realizar Matrícula UFS',
                estimateAt: new Date(),
            },
            {
                id: Math.random(),
                desc: 'Estudar Grafos',
                estimateAt: new Date(),
            },
            {
                id: Math.random(),
                desc: 'Lavar o Carro',
                estimateAt: new Date(),
                doneAt: new Date(),
            },
            {
                id: Math.random(),
                desc: 'Estudar Python',
                estimateAt: new Date(),
            },
            {
                id: Math.random(),
                desc: 'Ir ao mercado',
                estimateAt: new Date(),
            }
        ]
    }
    /**
     * Altera entre um checked
     * TODO: Refatorar usando o forEach
     */
    toggleTask = (taskID) => {
        const tasks = [...this.state.tasks];
        const newTask = tasks.map((task) => {
            if (task.id === taskID) {
                if (task.doneAt)
                    return { id: task.id, desc: task.desc, estimateAt: task.estimateAt }
                else{
                    return { ...task, doneAt: new Date() }

                }

            } else {
                return task
            }
        })
        this.setState({ tasks: newTask });
    }

    /**
     * Renderiza uma tarefa.
     */
    renderItem = ({ item }) => {
        return (<Task {...item} toggleTask={this.toggleTask} />)
    }

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
                    <FlatList
                        data={this.state.tasks}
                        renderItem={this.renderItem}
                        keyExtractor={item => String(item.id)}
                    />
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