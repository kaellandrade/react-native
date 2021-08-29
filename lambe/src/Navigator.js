import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import Feed from './screens/Feed';
import { NavigationContainer } from '@react-navigation/native';
const Tab = createBottomTabNavigator();

const MyTabs = _ => {
    return (
        <NavigationContainer>

            <Tab.Navigator initialRouteName="Feed"
                screenOptions={{
                    tabBarActiveTintColor: '#e91e63',
                    headerShown: false
                }}>
                <Tab.Screen name="Feed" component={Feed} options={{
                    title: 'Feed',
                    tabBarIcon: ({ tintColor }) => <Icon name='home' size={30} color={tintColor} />
                }}


                />
                <Tab.Screen name="AddPhoto" component={Feed} options={{
                    title: 'AddPhoto',
                    tabBarIcon: ({ tintColor }) => <Icon name='camera' size={30} color={tintColor} />
                }}


                />
                <Tab.Screen name="Profile" component={Feed} options={{
                    title: 'Profile',
                    tabBarIcon: ({ tintColor }) => <Icon name='user' size={30} color={tintColor} />
                }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}


const MenuRoutes = {
    Feed: {
        name: 'Feed',
        screen: Feed,
        navigationOptions: {
            title: 'Feed',
            tabBarIcon: ({ tintColor }) => <Icon name='home' size={30} color={tintColor} />
        }
    },
    Add: {
        name: 'AddPhoto',
        screen: Feed,
        navigationOptions: {
            title: 'Add Picture',
            tabBarIcon: ({ tintColor }) => <Icon name='camera' size={30} color={tintColor} />
        }
    },
    Profile: {
        name: 'Profile',
        screen: Feed,
        navigationOptions: {
            title: 'Profile',
            tabBarIcon: ({ tintColor }) => <Icon name='user' size={30} color={tintColor} />
        }
    }
}

const MenuConfig = {
    initialRouteName: 'Feed',
    tabBarOptions: {
        showLabel: false
    }
}


// const MenuNvigator = createBottomTabNavigator(MenuRoutes, MenuConfig);

export default MyTabs;