import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import UserList from '../views/UserList';
import UserForm from '../views/UserForm';
import { Button, Icon } from 'react-native-elements'; // TODO: verificar depois


const Stack = createStackNavigator();
const App = props => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="UserList"
                screenOptions={screenOptions}
            >
                <Stack.Screen
                    name="UserList"
                    component={UserList}
                    options={({ navigation }) => {
                        return {

                            title: "Lista de Usuários",
                            headerRight: _ => (<Button
                                onPress={_ => navigation.navigate('UserForm')}
                                type="clear"
                                icon={<Icon type='font-awesome-5' name='plus' size={25} color={'white'} />} />)
                        }
                    }}

                />
                <Stack.Screen
                    name="UserForm"
                    component={UserForm}
                    options={{
                        title: "Formulário de Usuários"
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const screenOptions = {
    headerStyle: {
        backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold'
    }
};

export default App;