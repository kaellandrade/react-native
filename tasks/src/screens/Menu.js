import React from 'react';
import { Text, ScrollView } from 'react-native';
import { DrawerItems } from 'react-navigation-drawer';

const Menu = props => {
    return (
        <ScrollView>
            <DrawerItems {...props} />
        </ScrollView>
    );
}

export default Menu;