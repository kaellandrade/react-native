import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer'
import comonStyles from './comonStyles';
import { Text } from 'react-native';
import Auth from './screens/Auth';
import TaskList from './screens/TaskList';
import CalendarIcon from './components/Calendar';

const menuRoutes = {


    Today: {
        name: 'Hoje',
        screen: props => <TaskList title='Hoje' daysAhead={0} {...props} />,
        navigationOptions: {
            title: 'Hoje',
            drawerIcon: <CalendarIcon days={0} color={comonStyles.colors.today} />,
        }
    },
    Tomorrow: {
        name: 'Tomorrow',
        screen: props => <TaskList title='Amanhã' daysAhead={1} {...props} />,
        navigationOptions: {
            title: 'Amanhã',
            drawerIcon: <CalendarIcon days={1} color={comonStyles.colors.tomorrow} />
        }
    },
    Week: {
        name: 'Week',
        screen: props => <TaskList title='Semana' daysAhead={7} {...props} />,
        navigationOptions: {
            title: 'Semana',
            drawerIcon: <CalendarIcon days={7} color={comonStyles.colors.week} />
        }

    },
    Month: {
        name: 'Month',
        screen: props => <TaskList title='Mês' daysAhead={30} {...props} />,
        navigationOptions: {
            title: 'Mês',
            drawerIcon: <CalendarIcon days={30} color={comonStyles.colors.month} />
        }
    }

}


const menuNavigator = createDrawerNavigator(menuRoutes);
const mainRoutes = {
    Auth: {
        name: 'Auth',
        screen: Auth
    },
    Home: {
        name: 'Home',
        screen: menuNavigator
    }
};

const mainNavigator = createSwitchNavigator(mainRoutes, {
    initialRouteName: 'Auth'
})

export default createAppContainer(mainNavigator);