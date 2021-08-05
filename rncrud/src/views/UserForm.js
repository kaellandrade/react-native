import React, { useContext, useState } from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import UsersContext from '../context/UsersContext';
import { Input, Image, Button, Icon } from 'react-native-elements';
const UserForm = ({ route, navigation }) => {
    const [user, setUser] = useState(route.params ? route.params : {})
    const { dispatch } = useContext(UsersContext);
    console.log(user);

    return (
        <View style={style.form}>

            <Input
                onChangeText={name => setUser({ ...user, name })}
                placeholder="Nome"
                value={user.name}
                leftIcon={{ type: 'font-awesome', name: 'user' }}
            />

            <Input
                placeholder='Email'
                leftIcon={{ type: 'font-awesome', name: 'envelope' }}
                value={user.email}
                onChangeText={email => setUser({ ...user, email })}
            />
            <View style={style.inputImg}>
                <Input
                    placeholder='Url Avatar'
                    leftIcon={{ type: 'font-awesome', name: 'link' }}
                    value={user.avatarURL}
                    onChangeText={avatarURL => setUser({ ...user, avatarURL })}
                />
                <Image source={{ uri: user.avatarURL }} style={style.avatarImg} />
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>

                <Button title='Salvar' type='outline' icon={<Icon name='save' color='#04A777' size={50} />}
                    onPress={() => {
                        dispatch({ type: user.id ? 'updateUser' : 'createUser', payload: user });
                        navigation.goBack();
                    }}
                />
                <Button title='Limpar' type='outline' icon={<Icon name='clear' color='#FB8B24' size={50} />}
                    onPress={() => {
                        setUser({});
                    }}
                />
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    form: {
        padding: 12
    },
    avatarImg: { width: 40, height: 40 },
    inputImg: {
        width: Dimensions.get('window').width - 68,
        display: 'flex',
        flexDirection: 'row'
    }
});

export default UserForm;