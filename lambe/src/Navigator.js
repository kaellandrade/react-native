import 'react-native-gesture-handler';
import React, { Fragment } from 'react';
import { connect } from 'react-redux'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/FontAwesome';
import Feed from './screens/Feed';
import AddPhoto from './screens/AddPhoto';
import Profile from './screens/Profile';
import Login from './screens/Login';
import Register from './screens/Register';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// TODO: Tentar usar o REDUX para renderizar as telas

const Navigator = props => {
    return (
        <NavigationContainer>

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
                        } else if (route.name == 'Login') {
                            iconeName = 'user'
                        } else {
                            iconeName = 'cog'
                        }
                        return <Icon name={iconeName} size={iconSize} color={iconColor} />
                    },
                    headerShown: false,
                    tabBarShowLabel: false
                })
                }
            >

                <Tab.Screen name="Feed" component={Feed} options={{ title: 'Feed' }, { tabBarBadge: 10 }} />
                {
                    props.email ? (
                        // Usuário conectado
                        <Fragment>
                            <Tab.Screen name="AddPhoto" component={AddPhoto} options={{ title: 'AddPhoto', }} />
                            <Tab.Screen name="Profile" component={Profile} options={{ title: 'Profile', }} />
                        </Fragment>
                    ) : (
                        <Fragment>
                            <Tab.Screen name="Login"
                                component={Login}
                                options={{ title: 'Login' }}
                            />

                            {/* <Stack.Screen name="Register" component={Register} /> */}

                        </Fragment>
                    )
                }
            </Tab.Navigator>
        </NavigationContainer>
    )
}

const mapStateToProps = ({ user }) => {
    return {
        email: user.email,
        name: user.name
    }
}
export default connect(mapStateToProps, null)(Navigator);
// export default Navigator;