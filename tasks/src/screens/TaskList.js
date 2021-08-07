import React, { Component } from 'react';
import { Text, View, StyleSheet, ImageBackground, FlatList, TouchableOpacity, Platform, Dimensions } from 'react-native';
import Task from '../components/Task';
import TodayImage from '../../assets/imgs/today.png';

import comonStyles from '../comonStyles';
import Icon from 'react-native-vector-icons/FontAwesome5';

import moment from 'moment';
import 'moment/locale/pt-br';
/**
 * Componente principal.
 */
class TaskList extends Component {
    state = {
        showDoneTasks: true,
        darkModel: false,
        visibleTasks: [],
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
    componentDidMount = _ => {
        this.filterTasks();
    }

    filterTasks = () => {
        let visibleTasks = null;
        if (this.state.showDoneTasks) {
            visibleTasks = [...this.state.tasks];
        } else {
            const pending = task => task.doneAt === undefined;
            visibleTasks = this.state.tasks.filter(pending);
        }
        this.setState({ ...this.state, visibleTasks });
    }

    toggleFilter = _ => {
        this.setState({ showDoneTasks: !this.state.showDoneTasks }, this.filterTasks)
    }

    toggleDarkModel = _ => {
        this.setState({ darkModel: !this.state.darkModel })
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
                else {
                    return { ...task, doneAt: new Date() }
                }

            } else {
                return task
            }
        })
        this.setState({ tasks: newTask }, this.filterTasks);
    }

    /**
     * Renderiza uma tarefa.
     */
    renderItem = ({ item }) => {
        return (<Task {...item} toggleTask={this.toggleTask} darkModel={this.state.darkModel} />)
    }

    render() {
        const today = moment().locale('pt-br').format('ddd, D [de] MMMM');
        return (
            <View style={styles.container}>
                <ImageBackground style={styles.backGround} source={TodayImage}>
                    <View style={styles.container2}>
                        <View style={[styles.iconBar]}>
                            <TouchableOpacity style={{ marginRight: 10 }} onPress={this.toggleFilter}>
                                <Icon color={comonStyles.colors.secundary} size={comonStyles.icon.size_md} name={this.state.showDoneTasks ? 'eye' : 'eye-slash'} />
                            </TouchableOpacity>

                            <TouchableOpacity onPress={this.toggleDarkModel}>
                                <Icon color={comonStyles.colors.secundary} size={comonStyles.icon.size_md} name={this.state.darkModel ? 'sun' : 'moon'} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.titleBar}>
                            <Text style={styles.title}>Hoje</Text>
                            <Text style={styles.SubTitle} >{today}</Text>
                        </View>
                    </View>
                </ImageBackground>
                <View style={[styles.taskList, this.state.darkModel ? { backgroundColor: 'black' } : { backgroundColor: 'white' }]}>
                    <FlatList
                        data={this.state.visibleTasks}
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
        flex: 1,
    },
    container2: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-evenly'
    },
    backGround: {
        flex: 3
    },
    taskList: {
        flex: 7
    },
    titleBar: {
        alignItems: "flex-start",

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
    },
    iconBar: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginHorizontal: 20,
        marginTop: Platform.OS === 'ios' ? 30 : 10,
        flex: 1
    }
});

export default TaskList;