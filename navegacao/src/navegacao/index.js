import React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import StackNav from './StackNav';
import Tab from './Tab';
import Drawer from './Drawer';


const Index = props => {
    return (
        <SafeAreaView style={{flex:1}}>
            <NavigationContainer>
                <Drawer/>
                {/* <StackNav/> */}
                {/* <Tab/> */}
            </NavigationContainer>
        </SafeAreaView>
    );
}

export default Index;