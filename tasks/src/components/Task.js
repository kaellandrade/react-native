import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import comonStyles from '../comonStyles';
import Icon from 'react-native-vector-icons/FontAwesome';
import moment from 'moment';
import 'moment/locale/pt-br';
/**
 * Criar os checkBox 
 */
const getCheckView = doneAt => {
    if (!doneAt) {
        return (
            <View style={styles.pending}>
            </View>
        );

    }
    else {

        return (
            <View style={styles.done}>
                <Icon name='check' size={20} color='#FFF' />
            </View>
        );
    }

}

const Task = props => {

    const date = props.doneAt ? props.doneAt : props.estimateAt;
    const formatteddate = moment(date).locale('pt-br').format('ddd, D, [de] MMMM');

    const doneOrNotStyle = props.doneAt ? {
        textDecorationLine: 'line-through'
    } : {};

    return (
        <View style={styles.container}>
            <View style={styles.checkContainer}>
                {getCheckView(props.doneAt)}
            </View>

            <View>

                <Text style={[styles.descricao, doneOrNotStyle]}>{props.desc}</Text>
                <Text style={styles.date}>{formatteddate}</Text>
                {/* <Text>{String(props.doneAt)}</Text> */}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderColor: '#aaa',
        borderBottomWidth: 1,
        paddingVertical: 10,
        alignItems: 'center'
    },
    checkContainer: {
        width: '20%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    pending: {
        width: 25,
        height: 25,
        borderRadius: 13,
        borderWidth: 1,
        borderColor: '#555',

    },
    done: {
        width: 25,
        height: 25,
        borderRadius: 13,
        borderWidth: 1,
        backgroundColor: '#3e964fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    descricao: {
        fontFamily: comonStyles.fontFamily,
        color: comonStyles.colors.mainText,
        fontSize: 15,
    },
    date: {
        fontFamily: comonStyles.fontFamily,
        color: comonStyles.colors.subText,
        fontSize: 12
    }

});

export default Task;