import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Platform,
    Image,
    TouchableOpacity
} from 'react-native';
import icon from '../../assets/imgs/icon.png';
import { connect } from 'react-redux';
import { Gravatar } from 'react-native-gravatar';

/**
 * Cabeçalho da Aplicação.
 */
class Header extends Component {

    render() {
        const name = this.props.name || 'Anonymous'
        const gravatar = this.props.email ?
            <Gravatar
                options={{ email: this.props.email, secure: true }}
                style={styles.avatar} /> : null
        return (
            <View style={styles.container}>
                <View style={styles.rowContainer}>
                    <Image source={icon} style={styles.image} />
                    <Text style={styles.title}>Lambe Lambe</Text>
                </View>
                <View style={styles.usercontainer}>
                    <Text style={styles.user}>{name}</Text>
                    {gravatar}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === 'ios' ? 20 : 0,
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#bbb',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        height: 30,
        width: 30,
        resizeMode: 'contain'
    },
    title: {
        color: '#000',
        fontFamily: 'shelter',
        height: 30,
        fontSize: 28
    },
    usercontainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    user: {
        fontSize: 10,
        color: '#888'
    },
    avatar: {
        width: 40,
        height: 40,
        marginLeft: 10,
        borderRadius: 100
    }


})
const mapStateToprops = ({ user }) => {
    return {
        novo: user.novo,
        email: user.email,
        name: user.name
    }
}
export default connect(mapStateToprops, null)(Header);