import React, { Component } from 'react';
import { connect } from 'react-redux'
import { logout } from '../store/actions/user'
import { Text, View, StyleSheet } from 'react-native';
import { Gravatar } from 'react-native-gravatar';
import IconButton from '../components/IconButton';

class Profile extends Component {
    logout = () => {
        this.props.onLogout();
        // this.props.navigation.navigate('Auth')
    }
    render() {
        const options = { email: this.props.email, secure: true }
        return (
            <View style={styles.container}>
                <Gravatar options={options} style={styles.avatar} />
                <Text style={styles.nickname}>{this.props.name}</Text>
                <Text style={styles.email}>{this.props.email}</Text>
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

const mapStateToProps = ({ user }) => {
    return {
        email: user.email,
        name: user.name
    }
}

const mapDispatcTohProps = dispatch => {
    return {
        onLogout: _ => dispatch(logout())
    }
}
export default connect(mapStateToProps, mapDispatcTohProps)(Profile);