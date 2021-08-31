import React, { Fragment, useState } from 'react';
import {
    createBottomTabNavigator,


} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import Feed from './screens/Feed';
import AddPhoto from './screens/AddPhoto';
import Profile from './screens/Profile';
import Login from './screens/Login';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();
const AuthContext = React.createContext();

const Navigator = _ => {
    let stateLogin = true
    /*
    if (state.isLoading) {
        // We haven't finished checking for the token yet
        return <SplashScreen />;
      }
    */
    return (
        <NavigationContainer>
            <AuthContext.Provider value={{ teste: 'ok' }}>

                <Tab.Navigator
                    initialRouteName="Feed"
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused, color, size }) => {
                            let iconeName = null;
                            let iconColor = 'black';
                            let iconSize = 25;
                            if (focused) {
                                iconSize = 30;
                                iconColor = '#307af0'
                            }

                            if (route.name === 'Feed') {
                                iconeName = 'home'
                            } else if (route.name === 'AddPhoto') {
                                iconeName = 'camera'
                            } else if (route.name === 'Profile') {
                                iconeName = 'user'
                            } else {
                                iconeName = 'user'
                            }
                            return <Icon name={iconeName} size={iconSize} color={iconColor} />
                        },
                        headerShown: false,
                        tabBarShowLabel: false
                    })
                    }
                >
                    {
                        stateLogin ? (
                            // Usuário conectado
                            <Fragment>
                                <Tab.Screen name="Feed" component={Feed} options={{ title: 'Feed' }, { tabBarBadge: 10 }} />
                                <Tab.Screen name="AddPhoto" component={AddPhoto} options={{ title: 'AddPhoto', }} />
                                <Tab.Screen name="Profile" component={Profile} options={{ title: 'Profile', }} />
                            </Fragment>
                        ) : (
                            <Fragment>
                                <Tab.Screen name="Feed" component={Feed} options={{ title: 'Feed' }, { tabBarBadge: 10 }} />
                                <Tab.Screen name="Login"
                                    component={Login}
                                    options={{ title: 'Login' }}
                                />
                            </Fragment>
                        )
                    }
                </Tab.Navigator>
            </AuthContext.Provider>
        </NavigationContainer >
    );
}
export default Navigator;