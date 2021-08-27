import React from 'react';
import { Text, ScrollView, StyleSheet, View, TouchableOpacity, AccessibilityInfo, ImageBackground } from 'react-native';
import { DrawerItems } from 'react-navigation-drawer';
import { Gravatar } from 'react-native-gravatar';
import comonStyles from '../comonStyles';

import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';
import { greeting } from '../util/getMoment';

const Menu = props => {
    const logout = _ => {
        delete axios.defaults.headers.common['Authorization'];
        AsyncStorage.removeItem('userData');
        props.navigation.navigate('AuthOrApp');

    }
    const constGravatar = {
        email: props.navigation.getParam('email'),
        secure: true
    }
    return (
        <ScrollView>
            <View style={styles.header}>
                <Text style={styles.title}>Todo React</Text>
                <View style={styles.boxUser} >
                    <Gravatar style={styles.avatar} options={constGravatar} />
                    <View style={styles.userInfo}>
                        <Text style={styles.name}>
                            {`${greeting(new Date())}, ${props.navigation.getParam('name').replace(/\b\w/g, (fst) => {
                                return fst.toUpperCase()
                            })}!`}

                        </Text>
                        <Text style={styles.email}>{props.navigation.getParam('email').toLowerCase()}</Text>
                    </View>
                </View>
                <TouchableOpacity onPress={logout}>
                    <View style={styles.logOutIcon}>
                        <Text style={{ fontFamily: comonStyles.fontFamily, fontSize: 20, marginRight: 5 }}>Sair</Text>
                        <Icon name='sign-out' size={comonStyles.icon.size_md} color='#800' />
                    </View>
                </TouchableOpacity>
            </View>
            <DrawerItems {...props} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#ddd',
        borderBottomWidth: 1,
        borderColor: '#ddd'
    },
    title: {
        textAlign: 'center',
        color: "#000",
        fontFamily: comonStyles.fontFamily,
        fontSize: 30,
        paddingTop: 30,
        padding: 10,

    },
    avatar: {
        width: 60,
        height: 60,
        borderWidth: 3,
        borderRadius: 30,
        margin: 10
    },
    userInfo: {
        marginLeft: 10
    },
    name: {
        fontFamily: comonStyles.fontFamily,
        fontSize: 20,
        marginBottom: 5,
        color: comonStyles.colors.mainText,
        marginBottom: 5,
        fontWeight: "bold"
    },
    email: {
        fontFamily: comonStyles.fontFamily,
        fontSize: 15,
        color: comonStyles.colors.subText,
        marginBottom: 10
    },
    logOutIcon: {
        alignContent: 'center',
        flexDirection: 'row',
        marginLeft: 10,
        marginBottom: 10
    },
    boxUser: {
        borderTopWidth: 0.3,
        borderColor: '#999',
        flexDirection: 'row',
        alignItems: 'center'
    }
});

export default Menu;