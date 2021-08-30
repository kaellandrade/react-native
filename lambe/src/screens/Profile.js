import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Gravatar } from 'react-native-gravatar';
import IconButton from '../components/IconButton';

class Profile extends Component {
    logout = () => {

    }
    render() {
        const options = { email: 'mikael.java@gmail.com', secure: true }
        return (
            <View style={styles.container}>
                <Gravatar options={options} style={styles.avatar} />
                <Text style={styles.nickname}>Micael</Text>
                <Text style={styles.email}>mikael.java@gmail.com</Text>
                <IconButton color='#A00' name='sign-out' label='Sair' press={this.logout} />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 75,
        marginTop: 100
    },
    nickname: {
        marginTop: 30,
        fontSize: 30,
        fontWeight: 'bold'
    },
    email: {
        marginTop: 20,
        fontSize: 25
    },

})
export default Profile;