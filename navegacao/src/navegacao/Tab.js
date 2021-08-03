import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import TelaA from '../views/TelaA';
import TelaB from '../views/TelaB';
import TelaC from '../views/TelaC';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const Tabs = _ => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'TelaA') {
                        iconName = focused ? 'add-circle' : 'add-circle-outline';

                    } else if (route.name === 'TelaB') {
                        iconName = focused ? 'alarm' : 'alarm-outline';

                    } else {
                        iconName = focused ? 'bluetooth' : 'bluetooth-outline';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                }
            })}

            initialRouteName='TelaA'
            tabBarOptions={{
                activeTintColor: 'blue',
                inactiveTintColor: 'green',
                showLabel: false
            }}
        >
            <Tab.Screen name='TelaA' component={TelaA} />
            <Tab.Screen name='TelaB' component={TelaB} />
            <Tab.Screen name='TelaC' component={TelaC} />

        </Tab.Navigator>
    );
}

export default Tabs;