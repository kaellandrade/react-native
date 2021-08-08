import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableWithoutFeedback,
    Vibration,
    TouchableOpacity
} from 'react-native';
import comonStyles from '../comonStyles';
import Icon from 'react-native-vector-icons/FontAwesome';
import moment from 'moment';
import 'moment/locale/pt-br';
import Swipeable from 'react-native-gesture-handler/Swipeable';

// TODO: Refatorar o darkModel
/**
 * Criar os checkBox 
 */
const VIBRATION_TIME = { check: 1000 * 0.03, swipeable: 1000 * 0.04 };

const Task = props => {
    const getCheckView = doneAt => {
        if (!doneAt) {
            return (
                <View style={[styles.pending, { borderColor: props.darkModel ? '#999' : '#555' }]} />
            );

        }
        else {
            return (
                <View style={[styles.done, { borderColor: props.darkModel ? 'white' : 'black' }]}>
                    <Icon name='check' size={20} color='#FFF' />
                </View>
            );
        }

    }

    const date = props.doneAt ? props.doneAt : props.estimateAt;
    const formatteddate = moment(date).locale('pt-br').format('LLLL');

    const doneOrNotStyle = props.doneAt ? {
        textDecorationLine: 'line-through'
    } : {};

    const getRightContent = () => {
        return (
            <TouchableOpacity style={styles.right}>
                <Icon name="trash" size={comonStyles.icon.size_md} color='#fff' />
            </TouchableOpacity>
        )

    }

    return (
        <Swipeable renderRightActions={getRightContent} onSwipeableRightWillOpen={_ => Vibration.vibrate(VIBRATION_TIME.swipeable)} >
            <View style={styles.container}>
                <TouchableWithoutFeedback onPress={() => {
                    props.toggleTask(props.id);
                    Vibration.vibrate(VIBRATION_TIME.check);

                }
                }>
                    <View style={styles.checkContainer}>
                        {getCheckView(props.doneAt)}
                    </View>
                </TouchableWithoutFeedback>

                <View>
                    <Text style={[styles.descricao, doneOrNotStyle, props.darkModel ? { color: 'white' } : { color: 'black' }]}>{props.desc}</Text>
                    <Text style={styles.date, props.darkModel ? { color: comonStyles.colors.secundary } : { color: 'black' }}>{formatteddate}</Text>
                    {/* <Text>{String(props.doneAt)}</Text> */}
                </View>
            </View>
        </Swipeable>
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

    },
    done: {
        width: 25,
        height: 25,
        borderRadius: 13,
        borderWidth: 1,
        backgroundColor: '#3e964fff',
        alignItems: 'center',
        justifyContent: 'center',

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
    },
    right: {
        backgroundColor: comonStyles.colors.today,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingHorizontal: 20
    }

});

export default Task;