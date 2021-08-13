import React, { Component } from 'react';
import {
    Modal,
    View,
    StyleSheet,
    TouchableWithoutFeedback,
    Text,
    TouchableOpacity,
    TextInput,
    Platform
} from 'react-native';
import comonStyles from '../comonStyles';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';


/**
 * Modal reponsável por cadastrar uma tarefa
 */
const initialState = { desc: '', date: new Date(), showDatePicker: false }
class AddTask extends Component {

    state = {
        ...initialState
    }
    save = _ => {
        const newTask = { desc: this.state.desc, date: this.state.date }
        this.props.onSave && this.props.onSave(newTask);
        this.setState({ ...initialState });

    }

    onChangeDate = (_, date) => {
        const currentDate = date || new Date();
        this.setState({ date: currentDate, showDatePicker: false })
    }
    getDatePicker = () => {

        let datePicker = <DateTimePicker mode='datetime' value={this.state.date} onChange={this.onChangeDate} />
        const dateString = moment(this.state.date).format('ddd, D MMM [de] YYYY')
        if (Platform.OS === 'android') {
            datePicker = (
                <View>
                    <TouchableOpacity onPress={_ => this.setState({ showDatePicker: true })}>
                        <Text style={[styles.date, this.props.darkModel ? { color: 'white' } : { color: 'black' }]}>
                            {dateString}
                        </Text>
                    </TouchableOpacity>
                    {this.state.showDatePicker && datePicker}
                </View>
            )
        }
        return datePicker;
    }




    render() {
        return (
            <Modal transparent={true} visible={this.props.isVisible} onRequestClose={this.props.onCancel}
                animationType='fade'>
                <TouchableWithoutFeedback onPress={this.props.onCancel}>
                    <View style={styles.background}>
                    </View>
                </TouchableWithoutFeedback>
                <View style={[styles.container, this.props.darkModel ? { backgroundColor: '#131c21' } : { backgroundColor: 'white' }]}>
                    <Text style={styles.header}>Nova Tarefa</Text>
                    <TextInput
                        onChangeText={desc => this.setState({ desc })}
                        style={[styles.input, this.props.darkModel ? { backgroundColor: '#323739', color: 'white' } : { backgroundColor: '#84888c', color: 'white' }]}
                        placeholder='Ex: Estudar Java Script'
                        value={this.state.desc} />
                    {this.getDatePicker()}
                    <View style={styles.buttons}>
                        <TouchableOpacity onPress={this.props.onCancel}>
                            <Text style={styles.button}>Cancelar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.save}>
                            <Text style={styles.button}>Salvar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableWithoutFeedback onPress={this.props.onCancel}>
                    <View style={styles.background}>
                    </View>
                </TouchableWithoutFeedback>

            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white'
    },
    background: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.8)'
    },
    header: {
        fontFamily: comonStyles.fontFamily,
        backgroundColor: comonStyles.colors.today,
        color: comonStyles.colors.secundary,
        textAlign: 'center',
        padding: 15,
        fontSize: 25
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'flex-end'

    },
    button: {
        margin: 20,
        marginRight: 30,
        color: comonStyles.colors.today,
        fontSize: 18
    },
    input: {
        fontFamily: comonStyles.fontFamily,
        height: 50,
        margin: 15,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#e3e3e3',
        borderRadius: 6,
        fontSize: 20,
        color: 'black'

    },
    date: {
        fontFamily: comonStyles.fontFamily,
        fontSize: 20,
        marginLeft: 15
    }
});

export default AddTask;