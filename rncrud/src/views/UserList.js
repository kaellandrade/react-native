import React, { Fragment, useContext } from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { ListItem, Avatar, Button, Icon } from 'react-native-elements'
import UsersContext from '../context/UsersContext';

const UserList = props => {
    const { state, dispatch } = useContext(UsersContext);
    /**
     * Verifica se o usuário deseja relmente deletar
     */
    function confirmUserDeletion(user) {
        return (
            Alert.alert('Excluir Usuário', `Deseja excluir ${user.name}`, [
                {
                    text: 'Sim',
                    onPress() {
                        dispatch({
                            type: 'deleteUser',
                            payload: user
                        })
                    }
                },
                { text: 'Não' }
            ])
        );
    }
    /**
     * Recebe um usuário e retorna um ListItem
     */
    function getUserItem({ item }) {
        return (
            <ListItem key={item.id} bottomDivider onPress={_ => props.navigation.navigate('UserForm', item)}>
                <Avatar source={{ uri: item.avatarURL }} />
                <ListItem.Content>
                    <ListItem.Title>{item.name}</ListItem.Title>
                    <ListItem.Subtitle>{item.email}</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Chevron
                    name="user-edit"
                    type='font-awesome-5'
                    size={30}
                    color="orange"
                    onPress={() => props.navigation.navigate('UserForm', item)}
                />
                <ListItem.Chevron
                    type='font-awesome-5'
                    name="user-times"
                    size={30}
                    color="red"
                    onPress={() => confirmUserDeletion(item)}
                />
            </ListItem>
        )
    }

    return (
        <View>
            <FlatList
                data={state.users}
                keyExtractor={user => String(user.id)}
                renderItem={getUserItem}
            />
        </View>
    );
}

export default UserList;