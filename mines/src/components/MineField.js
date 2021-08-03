import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Field from './Field';
const MineField = props => {
    const rows = props.board.map((row, r) => {
        const columns = row.map((field, c) => {
            return <Field {...field} key={c} onOpen={_ => props.onOpenField(r, c)} onSelect={_ => props.onSelectField(r, c)} />
        });
        return <View style={{ flexDirection: 'row' }} key={r}>{columns}</View>;
    });
    return <View style={style.container}>{rows}</View>;
}


const style = StyleSheet.create({
    container: {
        backgroundColor: '#EEE'
    }
});



export default MineField;