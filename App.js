import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Menu from './src/components/Menu';
import Load from './src/components/Load';
import Perfil from './src/components/Perfil';
import Login from './src/components/Login';

import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';

export default function App() {
  return (
    <NavigationContainer>
      <Perfil/>
    </NavigationContainer>
  );
}

