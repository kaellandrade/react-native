import React from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import Feed from './screens/Feed';
import AddPhoto from './screens/AddPhoto';
import { NavigationContainer } from '@react-navigation/native';
const Tab = createBottomTabNavigator();

const Navigator = _ => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                sho
                initialRouteName="Feed"
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconeName;
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
                        } else {
                            iconeName = 'user'
                        }
                        return <Icon name={iconeName} size={iconSize} color={iconColor} />
                    },
                    headerShown: false,
                    tabBarShowLabel: false,

                })
                }


            >

                <Tab.Screen name="Feed" component={Feed} options={{ title: 'Feed' }, { tabBarBadge: 10 }} />
                <Tab.Screen name="AddPhoto" component={AddPhoto} options={{ title: 'AddPhoto', }} />
                <Tab.Screen name="Profile" component={Feed} options={{ title: 'Profile', }} />
            </Tab.Navigator>
        </NavigationContainer >
    );
}
export default Navigator;