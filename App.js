import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './src/components/Login'
import Menu from './src/components/Menu'
import Perfil from './src/components/Perfil'
import Soon from './src/components/Soon'
import Load from './src/components/Load'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer initialRouteName='Load'>
      <Stack.Navigator>
        <Stack.Screen
        name='Load'
        component={Load}
        options={{
          headerShown: false
        }}/>

      
        <Stack.Screen
        name='Login'
        component={Login}
        options={{
          headerShown: false
        }}/>

        <Stack.Screen
        name='Menu'
        component={Menu}
        options={{
          headerShown: false
        }}/>

        <Stack.Screen
        name='Perfil'
        component={Perfil}
        options={{
          headerTintColor:"#f98"
        }}/>

        <Stack.Screen
        name='Soon'
        component={Soon}
        options={{
          headerTintColor:"#f98"
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

