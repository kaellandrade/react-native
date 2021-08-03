import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';

const UserForm = ({ route, navigator }) => {
    const [user, setUser] = useState(route.params ? route.params : {})

    return (
        <Text>{JSON.stringify(user)}</Text>
    );
}

export default UserForm;