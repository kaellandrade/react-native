import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer'
import Ionicons from 'react-native-vector-icons/Ionicons';
import TelaA from '../views/TelaA';
import TelaB from '../views/TelaB';
import TelaC from '../views/TelaC';
import TelaD from '../views/TelaD';


const Drawer = createDrawerNavigator();

const Draw = _ => {
    return (
        <Drawer.Navigator
            screenOptions={({ route }) => ({
                drawerIcon: ({ focused, color, size }) => {
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
            drawerContentOptions={{
                activeTintColor: 'red',
                inactiveTintColor: 'blue'
            }}>
            <Drawer.Screen name='TelaA' component={TelaA} />
            <Drawer.Screen name='TelaB' component={TelaB} />
            <Drawer.Screen name='TelaC' component={TelaC} />
            <Drawer.Screen name='TelaD' component={TelaD} />


        </Drawer.Navigator>
    );
}

export default Draw;