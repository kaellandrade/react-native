import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { Gravatar } from 'react-native-gravatar';

const Author = props => {
    return (
        <View style={styles.container}>
            <Gravatar options={{ email: props.email, secure: true }} style={styles.avatar} />
            <Text style={styles.nickname}>{props.nickname}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    nickname: {
        color: '#444',
        marginVertical: 10,
        fontWeight: 'bold',
        fontSize: 15
    },
    avatar: {
        width: 30,
        height: 30,
        borderRadius: 15,
        marginHorizontal: 15
    }

})

export default Author;