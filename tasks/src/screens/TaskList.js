import React, { Component } from 'react';
import {
    Text, View,
    StyleSheet,
    ImageBackground,
    FlatList,
    TouchableOpacity,
    Platform,
    Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import moment from 'moment';
import 'moment/locale/pt-br';
import AsyncStorage from "@react-native-community/async-storage"

import Task from '../components/Task';
import comonStyles from '../comonStyles';

import TodayImage from '../../assets/imgs/today.png';
import TomorrowImage from '../../assets/imgs/tomorrow.png';
import MonthImage from '../../assets/imgs/month.png';
import WeekImage from '../../assets/imgs/week.png';

import AddTask from './AddTasks';
import { greeting } from '../util/getMoment';
import { server, showError, showSuccess } from '../common';
import axios from 'axios';

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

    laodTasks = async _ => {
        try {
            const maxDate = moment()
                .add({ days: this.props.daysAhead })
                .format('YYYY-MM-DD 23:59:59');
            const res = await axios.get(`${server}/tasks?date=${maxDate}`);
            this.setState({ tasks: res.data }, this.filterTasks)
        } catch (error) {
            showError(error.response.data.msg)
        }

    }

    componentDidMount = async _ => {
        const stateString = await AsyncStorage.getItem('taskState');
        const savedState = JSON.parse(stateString) || initialState;
        this.setState({ showDoneTasks: savedState.showDoneTasks, darkModel: savedState.darkModel }, this.filterTasks);
        this.laodTasks();
    }

    deleteTask = async id => {
        try {
            await axios.delete(`${server}/tasks/${id}`)
            this.laodTasks();
        } catch (error) {
            showError(error.response.data.msg)

        }

    }

    getDayStyle = _ => {
        if (this.props.daysAhead === 0)
            return { img: TodayImage, color: comonStyles.colors.today };
        else if (this.props.daysAhead === 1)
            return { img: TomorrowImage, color: comonStyles.colors.tomorrow };
        else if (this.props.daysAhead === 7)
            return { img: WeekImage, color: comonStyles.colors.week };
        else
            return { img: MonthImage, color: comonStyles.colors.month };

    }

    addTask = async newTask => {
        if (!newTask.desc.trim()) {
            Alert.alert("Dados Inválidos", 'Informe uma descrição')
            return;
        }

        try {
            await axios.post(`${server}/tasks`, {
                desc: newTask.desc,
                estimateAt: newTask.date
            })
            this.setState({ showAddTask: false }, this.laodTasks);
        } catch (error) {
            showError(error.response.data.msg)
        }
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
        AsyncStorage.setItem('taskState', JSON.stringify({ showDoneTasks: this.state.showDoneTasks, darkModel: this.state.darkModel }));
    }

    toggleFilter = _ => {
        this.setState({ showDoneTasks: !this.state.showDoneTasks }, this.filterTasks)
    }

    toggleDarkModel = _ => {
        this.setState({ darkModel: !this.state.darkModel }, _ => { AsyncStorage.setItem('taskState', JSON.stringify({ darkModel: this.state.darkModel, showDoneTasks: this.state.showDoneTasks })) })
    }

    /**
     * Altera entre um checked
     * TODO: Refatorar usando o forEach
     */
    toggleTask = async (taskID) => {
        try {
            await axios.put(`${server}/tasks/${taskID}/toggle`);
            this.laodTasks();
        } catch (error) {
            showError(error.response.data.msg)

        }
    }

    /**
     * Renderiza uma tarefa.
     */
    renderItem = ({ item }) => {
        return (<Task {...item} onDelete={this.deleteTask} toggleTask={this.toggleTask} darkModel={this.state.darkModel} />)
    }

    render() {
        const today = moment().add({ days: this.props.daysAhead }).locale('pt-br').format('ddd, D [de] MMMM');
        return (
            <View style={styles.container} >
                <AddTask darkModel={this.state.darkModel} isVisible={this.state.showAddTask} onCancel={_ => { this.setState({ showAddTask: false }) }} onSave={this.addTask} />
                <ImageBackground style={styles.backGround} source={this.getDayStyle().img}>
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
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <TouchableOpacity style={{ marginLeft: 10 }} onPress={_ => this.props.navigation.openDrawer()}>
                                    <Icon color={comonStyles.colors.secundary} size={comonStyles.icon.size_md} name='bars' />
                                </TouchableOpacity>
                                <Text style={styles.title}>{this.props.title}</Text>
                            </View>
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
                    style={[styles.addButton, { backgroundColor: this.getDayStyle().color }]}>
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
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default TaskList;