import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tab = createNativeStackNavigator();

import Onboarding from './telas/Onboarding';
import Principal from './telas/Principal';
import Detalhes from './telas/Detalhes';
import SplaashScreen from './telas/SplashScreen';

export default function Rotas() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen options={{
          headerShown: false,
          statusBarHidden: true,
          statusBarColor:'transparent',
        }} name="SplashScreen" component={SplaashScreen} />
        <Tab.Screen name="Onboarding" component={Onboarding} options={{ headerShown: false }} />
        <Tab.Screen name="Principal" component={Principal} options={{ headerShown: false }} />
        <Tab.Screen name="Detalhes" component={Detalhes} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}