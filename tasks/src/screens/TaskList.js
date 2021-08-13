import React, { Component } from 'react';
import {
    Text, View,
    StyleSheet,
    ImageBackground,
    FlatList,
    TouchableOpacity,
    Platform,
    Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import moment from 'moment';
import 'moment/locale/pt-br';
import AsyncStorage from "@react-native-community/async-storage"

import Task from '../components/Task';
import comonStyles from '../comonStyles';
import TodayImage from '../../assets/imgs/today.png';
import AddTask from './AddTasks';
import { greeting } from '../util/getMoment';

const initialState = {
    showAddTask: false,
    showDoneTasks: true,
    darkModel: false,
    visibleTasks: [],
    tasks: [

    ]
};
/**
 * Componente principal.
 */
class TaskList extends Component {
    state = {
        ...initialState
    }
    componentDidMount = async _ => {
        const stateString = await AsyncStorage.getItem('taskState');
        const state = JSON.parse(stateString) || initialState;
        this.setState(state, this.filterTasks);
        this.filterTasks();
    }

    deleteTask = id => {
        const tasks = this.state.tasks.filter((task) => (task.id !== id));
        this.setState({ tasks }, this.filterTasks);
    }

    addTask = newTask => {
        if (!newTask.desc.trim()) {
            Alert.alert("Dados Inválidos", 'Informe uma descrição')
            return;
        }

        const tasks = [...this.state.tasks];
        tasks.push({ id: Math.random(), desc: newTask.desc, estimateAt: newTask.date });
        this.setState({ tasks, showAddTask: false }, this.filterTasks);

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
        AsyncStorage.setItem('taskState', JSON.stringify(this.state));
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
        return (<Task {...item} onDelete={this.deleteTask} toggleTask={this.toggleTask} darkModel={this.state.darkModel} />)
    }

    render() {
        const today = moment().locale('pt-br').format('ddd, D [de] MMMM');
        return (
            <View style={styles.container}>
                <AddTask darkModel={this.state.darkModel} isVisible={this.state.showAddTask} onCancel={_ => { this.setState({ showAddTask: false }) }} onSave={this.addTask} />
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
                            <Text style={styles.title}>{`${greeting(new Date())}!`}</Text>
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
                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={_ => this.setState({ showAddTask: true })}
                    style={styles.addButton}>
                    <Icon name='plus' size={20} color={comonStyles.colors.secundary} />
                </TouchableOpacity>
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
    },
    addButton: {
        position: 'absolute',
        right: 30,
        bottom: 30,
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: comonStyles.colors.today,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default TaskList;