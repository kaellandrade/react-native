import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import moment from 'moment';
import comonStyles from '../comonStyles';

const Calendar = props => {
    return (
        <View>
            <View style={styles.contFixed}>
                <View style={[styles.fixed, props.color ? { backgroundColor: props.color } : { backgroundColor: 'black' }]} />
                <View style={[styles.fixed, props.color ? { backgroundColor: props.color } : { backgroundColor: 'black' }]} />
            </View>
            <View style={[styles.calendar, props.color ? { borderColor: props.color } : { borderColor: 'black' }]}>
                <Text style={styles.dayNumber}>{moment().add(props.days || 0, 'days').format('D')}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    calendar: {
        width: 30,
        height: 30,
        borderTopWidth: 4,
        borderLeftWidth: 1.5,
        borderRightWidth: 1.5,
        borderBottomWidth: 1.5,
        borderRadius: 5,

    },
    dayNumber: {
        marginRight: 2,
        marginLeft: 3,
        fontFamily: comonStyles.fontFamily,
        fontSize: 15,
        textAlign: 'center',
        
    },
    fixed: {
        borderTopEndRadius: 2,
        borderTopStartRadius: 2,
        width: 5,
        height: 7,
        // backgroundColor: 'black'
    },
    contFixed: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
});

export default Calendar;